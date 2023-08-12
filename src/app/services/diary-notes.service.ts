import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DiaryNote } from '../types/DiaryNote';

@Injectable({
  providedIn: 'root',
})
export class DiaryNotesService {
  private diaryLocalStorageKeyName: string = 'diary_notes';
  private numberOfDiaryNotesToLoadInOneFetch: number = 10
  diaryNotes = new Subject<Array<DiaryNote>>()
  newDiaryNotes: Array<any> = []

  getNotes(): Array<DiaryNote> {
    const notes: string | null = localStorage.getItem(
      this.diaryLocalStorageKeyName
    );

    if (!notes) {
      return [];
    }

    return JSON.parse(notes);
  }

  getNotesInPages(fromPage: number, toPage: number): DiaryNote[] {
    const notes: Array<DiaryNote> = this.getNotes();
    let notesToRender = notes.slice((fromPage - 1) * this.numberOfDiaryNotesToLoadInOneFetch,
      (toPage - 1) * this.numberOfDiaryNotesToLoadInOneFetch)

    return notesToRender
  }

  addNewNote(noteText: string): void {
    let notes: Array<DiaryNote> = this.getNotes();

    //get local date and time, and remove the last 3 characters regarding seconds
    const currentDateAndTime = this.getCurrentDateAndTime();

    const newNote: DiaryNote = {
      id: notes.length + 1,
      dateAndTime: currentDateAndTime,
      text: noteText,
    };

    //adds element to the beginning of the array
    notes.unshift(newNote);

    this.writeNotesToLocalStorage(notes)
  }

  changeNote(id: number, newNoteText: string): void {
    let notes: Array<DiaryNote> = this.getNotes();

    const currentDateAndTime = this.getCurrentDateAndTime();

    notes = notes.map((note) => {
      if (note.id == id) {
        //taking only first path of the string, because the date could have been changed multiple times
        const noteDateOfCreation = note.dateAndTime.substring(0, 16);

        //creating new note with edited date and time
        const changedNote: DiaryNote = {
          id: id,
          dateAndTime:
            noteDateOfCreation + ' (Изменено ' + currentDateAndTime + ')',
          text: newNoteText,
          image: note.image
        };
        return changedNote;
      } else {
        return note;
      }
    });

    this.writeNotesToLocalStorage(notes)
  }

  deleteNoteById(id: number): void {
    let notes: Array<DiaryNote> = this.getNotes();

    notes = notes.filter((diaryNote) => diaryNote.id != id);

    this.writeNotesToLocalStorage(notes)
  }

  getNoteById(id: number): DiaryNote | undefined {
    const notes: Array<DiaryNote> = this.getNotes();
    const neededNote = notes.find((note) => note.id === id);
    return neededNote;
  }

  async addImageToNoteById(obj: { id: number; image: File }): Promise<void> {
    let notes: Array<DiaryNote> = this.getNotes();

    //putting new image to DiaryNote.image
    //getting note that we want to add image to for future processing
    let noteToAddImageTo: DiaryNote | undefined = notes.find((note) => note.id === obj.id);

    async function processImageFileToString(noteToAddImageTo: DiaryNote | undefined, image: File) {
      //reader for creating image string from File type
      const reader = new FileReader();
      reader.readAsDataURL(image);

      const changedNote = await new Promise((resolve, reject) => {
        reader.onload = () => {
          const result = reader.result;
          if (result) {
            const newNoteImage = result.toString();
            if (!noteToAddImageTo) {
              throw new Error(`Note's id not found`);
            }
            noteToAddImageTo['image'] = newNoteImage;
            resolve(noteToAddImageTo);
          } else {
            reject(new Error(`Can't process uploaded image`));
          }
        };
      });
      return changedNote;
    }

    await processImageFileToString(
      noteToAddImageTo,
      obj.image
    ).then((note) => note);

    this.writeNotesToLocalStorage(notes)
  }

  private writeNotesToLocalStorage(notes: DiaryNote[]) {
    //notifying subscribers about the changes
    this.diaryNotes.next(notes)

    //writing the new notes array in the localstorage
    const newNotes: string = JSON.stringify(notes);
    localStorage.setItem(this.diaryLocalStorageKeyName, newNotes);
  }

  private getCurrentDateAndTime(): string {
    return new Date().toLocaleString('ru-RU').replace(',', '').slice(0, -3);
  }
}


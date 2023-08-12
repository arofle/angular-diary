import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DiaryNote } from 'src/app/types/DiaryNote';

@Component({
  selector: 'app-diary-note',
  templateUrl: './diary-note.component.html',
  styleUrls: ['./diary-note.component.css'],
})
export class DiaryNoteComponent {
  @Input() diaryNote!: DiaryNote;
  @Output() deleteNoteEvent = new EventEmitter<number>();
  @Output() addImageToNoteEvent = new EventEmitter<{
    id: number;
    image: File;
  }>();
  selectedFile?: File;

  constructor(private router: Router) { }

  deleteNote(diaryNoteId: number): void {
    this.deleteNoteEvent.emit(diaryNoteId);
  }

  editNote(diaryNoteId: number) {
    this.router.navigate(['edit/' + diaryNoteId]);
  }

  addImageToNote(event: any): void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.addImageToNoteEvent.emit({
        id: this.diaryNote.id,
        image: this.selectedFile,
      });
    }
  }
}

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiaryNotesService } from 'src/app/services/diary-notes.service';
import { ValidationPopupComponent } from '../validation-popup/validation-popup.component';

@Component({
  selector: 'app-diary-note-writing-field',
  templateUrl: './diary-note-writing-field.component.html',
  styleUrls: ['./diary-note-writing-field.component.css'],
})
export class DiaryNoteWritingFieldComponent implements OnInit {
  isNoteFound: boolean = false;
  noteText?: string;
  @Input() isEditPage: boolean = false;
  @ViewChild(ValidationPopupComponent) validationPopupComponent!: ValidationPopupComponent;
  buttonText!: string;

  constructor(
    private diaryNotesService: DiaryNotesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.isEditPage) {
      this.buttonText = 'Сохранить'
      const diaryNoteId = this.activatedRoute.snapshot.params['id'];
      const diaryNote = this.diaryNotesService.getNoteById(Number(diaryNoteId));
      if (diaryNote) {
        this.noteText = diaryNote.text;
        this.isNoteFound = true;
      }
    } else {
      this.buttonText = 'Создать'
    }
  }

  createOrEditNote() {
    if (this.isEditPage) {
      this.changeExistingNote();
    } else {
      this.createNewNote();
    }
  }

  createNewNote(): void {
    if (!this.noteText || this.noteText == '') {
      this.validationPopupComponent.showFailValidationPopUp();
      return;
    }

    this.diaryNotesService.addNewNote(this.noteText);
    this.noteText = '';
    this.validationPopupComponent.showSuccessValidationPopUp();
  }

  changeExistingNote(): void {
    if (!this.noteText) {
      this.validationPopupComponent.showFailValidationPopUp();
      return;
    }

    const diaryNoteId = this.activatedRoute.snapshot.params['id'];
    this.diaryNotesService.changeNote(Number(diaryNoteId), this.noteText);
    this.validationPopupComponent.showEditSuccessValidationPopUp();
  }
}

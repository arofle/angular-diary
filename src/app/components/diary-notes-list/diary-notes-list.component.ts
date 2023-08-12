import { Component, OnInit } from '@angular/core';
import { DiaryNotesService } from 'src/app/services/diary-notes.service';
import { DiaryNote } from 'src/app/types/DiaryNote';

@Component({
  selector: 'app-diary-notes-list',
  templateUrl: './diary-notes-list.component.html',
  styleUrls: ['./diary-notes-list.component.css'],
})
export class DiaryNotesListComponent implements OnInit {
  private currentPage: number = 1
  diaryNotes: Array<DiaryNote> = [];
  preloadedNextPageDiaryNotes: Array<DiaryNote> = [];

  constructor(private diaryNotesService: DiaryNotesService) { }

  ngOnInit(): void {
    this.diaryNotesService.diaryNotes.subscribe((serviceDiaryNotes) => {
      this.diaryNotes = serviceDiaryNotes;
    });
    this.diaryNotes = this.diaryNotesService.getNotesInPages(1, 2);
    this.preloadedNextPageDiaryNotes = this.diaryNotesService.getNotesInPages(1, 3);
  }

  deleteNoteById(diaryNoteId: number) {
    this.diaryNotesService.deleteNoteById(Number(diaryNoteId));
  }

  addImageToNote(obj: { id: number; image: File }) {
    this.diaryNotesService.addImageToNoteById(obj);
  }

  //using ngx-infinite-scroll library
  onScroll() {
    this.diaryNotes = this.preloadedNextPageDiaryNotes
    this.currentPage++
    this.preloadedNextPageDiaryNotes = this.diaryNotesService.getNotesInPages(1, this.currentPage + 2)
  }
}

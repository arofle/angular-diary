import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryNotesListComponent } from './diary-notes-list.component';

describe('DiaryNotesListComponent', () => {
  let component: DiaryNotesListComponent;
  let fixture: ComponentFixture<DiaryNotesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiaryNotesListComponent]
    });
    fixture = TestBed.createComponent(DiaryNotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

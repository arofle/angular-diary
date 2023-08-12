import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryNoteNotFoundPageComponent } from './diary-note-not-found-page.component';

describe('DiaryNoteNotFoundPageComponent', () => {
  let component: DiaryNoteNotFoundPageComponent;
  let fixture: ComponentFixture<DiaryNoteNotFoundPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiaryNoteNotFoundPageComponent]
    });
    fixture = TestBed.createComponent(DiaryNoteNotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

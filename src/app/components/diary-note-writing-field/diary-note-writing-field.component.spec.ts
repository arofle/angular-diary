import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryNoteWritingFieldComponent } from './diary-note-writing-field.component';

describe('DiaryNoteWritingFieldComponent', () => {
  let component: DiaryNoteWritingFieldComponent;
  let fixture: ComponentFixture<DiaryNoteWritingFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiaryNoteWritingFieldComponent]
    });
    fixture = TestBed.createComponent(DiaryNoteWritingFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

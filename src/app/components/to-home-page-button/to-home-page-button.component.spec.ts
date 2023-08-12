import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToHomePageButtonComponent } from './to-home-page-button.component';

describe('ToHomePageButtonComponent', () => {
  let component: ToHomePageButtonComponent;
  let fixture: ComponentFixture<ToHomePageButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToHomePageButtonComponent]
    });
    fixture = TestBed.createComponent(ToHomePageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

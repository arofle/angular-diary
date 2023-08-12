import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { CreateButtonComponent } from './components/create-button/create-button.component';
import { DiaryNotesListComponent } from './components/diary-notes-list/diary-notes-list.component';
import { DiaryNoteComponent } from './components/diary-note/diary-note.component';
import { DiaryNoteWritingFieldComponent } from './components/diary-note-writing-field/diary-note-writing-field.component';
import { ToHomePageButtonComponent } from './components/to-home-page-button/to-home-page-button.component';
import { ValidationPopupComponent } from './components/validation-popup/validation-popup.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DiaryNoteNotFoundPageComponent } from './pages/diary-note-not-found-page/diary-note-not-found-page.component';
import { HtmlSanitizerPipe } from './pipes/html-sanitizer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EditPageComponent,
    CreatePageComponent,
    CreateButtonComponent,
    DiaryNotesListComponent,
    DiaryNoteComponent,
    DiaryNoteWritingFieldComponent,
    ToHomePageButtonComponent,
    ValidationPopupComponent,
    NotFoundPageComponent,
    DiaryNoteNotFoundPageComponent,
    HtmlSanitizerPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, EditorModule, InfiniteScrollModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

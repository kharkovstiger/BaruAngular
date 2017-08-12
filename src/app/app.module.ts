import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdDialogModule, MdInputModule, MdTableModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';
import {TableComponent} from './table';
import {DialogComponent} from './dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DialogComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    FormsModule,
    CdkTableModule,
    MdTableModule,
    MdDialogModule,
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

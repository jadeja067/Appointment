import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftComponent } from './components/left/left.component';
import { RightComponent } from './components/right/right.component';
import { ContainerComponent } from './components/container/container.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { FullCalendarModule } from '@fullcalendar/angular';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

=======
import { NgForm, ReactiveFormsModule } from '@angular/forms';
>>>>>>> origin/branch-right-side

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
<<<<<<< HEAD
    FullCalendarModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
=======
    FullCalendarModule,ReactiveFormsModule
>>>>>>> origin/branch-right-side
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarServicesService } from './services/calendar-services.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftComponent } from './components/left/left.component';
import { RightComponent } from './components/right/right.component';
import { ContainerComponent } from './components/container/container.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgForm, ReactiveFormsModule } from '@angular/forms';

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
    FullCalendarModule,ReactiveFormsModule
  ],
  providers: [CalendarServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

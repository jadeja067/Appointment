import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'],
  outputs: ['type'],
})
export class LeftComponent implements OnInit {
  // Refering to #calendar
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;
  calendarApi: any;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    height: 400,
    expandRows: true,
    plugins: [dayGridPlugin],
  };
  type = new EventEmitter();
  count1: number = 1
  count2: number = -1
  constructor() {}
  next(){
    this.calendarApi = this.calendarComponent.getApi()
    this.calendarApi.next()
    this.type.emit(this.count1++)
  }
  prev(){
    this.calendarApi = this.calendarComponent.getApi()
    this.calendarApi.prev()
    this.type.emit(this.count2--)
  }
  ngOnInit(): void {
    
  }
}

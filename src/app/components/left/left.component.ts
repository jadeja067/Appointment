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
  constructor() {}
  Method(type: string) {
    this.calendarApi = this.calendarComponent.getApi();
    this.type.emit(type);
    if (type == 'n') this.calendarApi.next();
    else this.calendarApi.prev();
  }

  ngOnInit(): void {}
}

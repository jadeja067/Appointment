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
  count: number = 0
  check : number = 0
  constructor() {}
  Method() {
    this.calendarApi = this.calendarComponent.getApi();
    if (this.count >= this.check){
      this.calendarApi.next();
      this.count++
    }
    else {
      this.calendarApi.prev()
      this.count *= -1
      this.count--
    }
    this.check = this.count
    this.type.emit(this.count);
  }

  ngOnInit(): void {}
}

import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction'
import { CalendarServicesService } from '../../services/calendar-services.service'
import { inputs } from '@syncfusion/ej2-angular-calendars/src/calendar/calendar.component';

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
    dateClick: date => this.setListValues(date.dateStr),
    plugins: [dayGridPlugin, interactionPlugin],
  };
  type = new EventEmitter();
  list: any[] = []
  count1: number = 1
  count2: number = -1
  constructor(private service: CalendarServicesService) {
    
  }
  calcApi(){
    this.calendarApi = this.calendarComponent.getApi()
  }
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
  
  setListValues(date: any = undefined){    
    this.service.filterEvents(date).subscribe((d:any) => this.list = d)
  }

  ngOnInit(): void {
    this.service.filterEvents().subscribe((d:any) => this.list = d)
  }
}

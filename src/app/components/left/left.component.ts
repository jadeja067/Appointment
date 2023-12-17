import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction'
import { CalendarServicesService } from '../../services/calendar-services.service'

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
    dateClick: info => this.setListValues(info.dateStr),
    plugins: [dayGridPlugin, interactionPlugin],
  };
  type = new EventEmitter();
  list: any[] = []
  count1: number = 1
  count2: number = -1
  constructor(private service: CalendarServicesService) {}
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
  
  setListValues(info: any){
    this.service.data.subscribe((ds:any) => this.list = ds.filter((d:any) => d.date == info))
  }
  
  ngOnInit(): void {
    this.service.data.subscribe((ds:any) => this.list = ds)
  }
}

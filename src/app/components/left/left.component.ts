import { Component, OnInit } from '@angular/core';
import { CalendarOptions, Calendar } from '@fullcalendar/core'; 
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    height: 400,
    expandRows: true,
    plugins: [dayGridPlugin]
  };
  cal! : Calendar;
  constructor() { 
    
  }

  ngOnInit(): void {
    this.cal.gotoDate('2018-06-01')
  }

}

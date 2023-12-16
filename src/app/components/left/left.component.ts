import { Component, OnInit , ViewChild} from '@angular/core';
import { CalendarOptions, Calendar } from '@fullcalendar/core'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarServicesService } from 'src/app/services/calendar-services.service';
// import { co } from '@fullcalendar/core/internal-common';


@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  // Refering to #calendar 
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;
  calendarApi: any;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    height: 400,
    expandRows: true,
    plugins: [dayGridPlugin]
  };
  // cal! : Calendar;
  constructor(private service: CalendarServicesService) { 
    
  }
  Method(type: string){
    this.calendarApi = this.calendarComponent.getApi();
    if(type == 'n') {
      this.service.toggleCalendar('n')
      this.calendarApi.next();
    }
    else {
      this.service.toggleCalendar('p')
      this.calendarApi.prev()
    }
    console.log(this.service.type);
    
  }

  ngOnInit(): void {
    // this.cal.gotoDate('2018-06-01')
  }
  

}

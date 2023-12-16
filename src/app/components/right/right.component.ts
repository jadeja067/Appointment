import { Component, OnInit, ViewChild, OnChanges, SimpleChange, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarServicesService } from 'src/app/services/calendar-services.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  // Refering to #calendar 
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;
  calendarApi: any;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    themeSystem: 'bootstrap5',
    height: 500,
    weekends:false,
    headerToolbar: false,
    plugins: [dayGridPlugin],
    // initial value
    events: [
      { title: 'event 1',textColor:"green",backgroundColor:"aquamarine",classNames:[ 'eventClass' ], date: '2023-12-18' },
      { title: 'event 1',textColor:"rgb(255, 0, 0)",backgroundColor:"rgb(255, 0, 0,.4)",classNames:[ 'eventClass' ], date: '2023-12-16' },
      { title: 'event 1',textColor:"rgb(187, 187, 1)",backgroundColor:"rgb(187, 187, 1,.4)",classNames:[ 'eventClass' ], date: '2023-12-12' },
      { title: 'event 1',textColor:"green",backgroundColor:"aquamarine",classNames:[ 'eventClass' ], date: '2023-12-10' },
      { title: 'event 1',textColor:"rgb(255, 0, 0)",backgroundColor:"rgb(255, 0, 0,.4)",classNames:[ 'eventClass' ], date: '2023-12-20' },
      { title: 'event 1',textColor:"green",backgroundColor:"aquamarine",classNames:[ 'eventClass' ], date: '2023-12-20' },
      { title: 'event 1',textColor:"green",backgroundColor:"aquamarine",classNames:[ 'eventClass' ], date: '2023-12-13' },
      { title: 'event 1',textColor:"green",backgroundColor:"aquamarine",classNames:[ 'eventClass' ], date: '2023-12-27' },
      { title: 'event 1',textColor:"green",backgroundColor:"aquamarine",classNames:[ 'eventClass' ], date: '2023-12-22' },
      { title: 'event 1',textColor:"green",backgroundColor:"aquamarine",classNames:[ 'eventClass' ], date: '2023-12-17' },
      { title: 'event 1',textColor:"green",backgroundColor:"aquamarine",classNames:[ 'eventClass' ], date: '2023-12-307' },
    ],
  };
  appointmentForm: FormGroup
  formData:Array<object> = []
  name: string = ""
  date: string = ""
  timeFrom: string = ""
  timeTo: string = ""
  checkBox: boolean = false
  nickName: string = ""
  email: string = ""
  description: string = ""

  constructor(private form: FormBuilder, private service: CalendarServicesService) {
    this.appointmentForm = form.group({
      name: new FormControl(),
      date: new FormControl(),
      timeFrom: new FormControl(),
      timeTo: new FormControl(),
      checkBox: new FormControl(),
      nickName: new FormControl(),
      email: new FormControl(),
      description: new FormControl()
    })
  }

  onSubmit() {
    
    this.formData = [...this.formData,{
      name:this.appointmentForm.value.name,
      date:this.appointmentForm.value.date,
      timeFrom:this.appointmentForm.value.timeFrom,
      timeTo:this.appointmentForm.value.timeTo,
      checkBox:this.appointmentForm.value.checkBoxte,
      nickName:this.appointmentForm.value.nickName,
      email:this.appointmentForm.value.email,
      description:this.appointmentForm.value.description
    }]
    console.log(this.formData)
  }

  ngOnInit(): void {
  }
  // @Input() type1: string = this.service.type;
  // ngOnChanges(this.service.type: string): any{
  //   if(this.service.type == 'n') this.calendarApi.next()
  //   else this.calendarApi.
  // }

}

import {
  Component,
  OnInit,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CalendarOptions } from '@fullcalendar/core';
import { CalendarServicesService } from '../../services/calendar-services.service'
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css'],
  inputs: ['type'],
})
export class RightComponent implements OnInit, OnChanges {
  // Refering to #calendar
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;
  calendarApi: any;
  type!: number;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    themeSystem: 'bootstrap5',
    height: 500,
    weekends:false,
    // headerToolbar: false,
    plugins: [dayGridPlugin],
    events: this.service.events,
  };
  appointmentForm: FormGroup;
  formData: Array<object> = [];
  name: string = '';
  date: string = '';
  timeFrom: string = '';
  timeTo: string = '';
  checkBox: boolean = false;
  nickName: string = '';
  email: string = '';
  description: string = '';

  constructor(private form: FormBuilder, private service: CalendarServicesService) {
    this.appointmentForm = form.group({
      name: new FormControl(),
      date: new FormControl(),
      timeFrom: new FormControl(),
      timeTo: new FormControl(),
      checkBox: new FormControl(),
      nickName: new FormControl(),
      email: new FormControl(),
      description: new FormControl(),
    });
  }

  onSubmit() {
    this.service.addEvent({
        title: this.appointmentForm.value.name,
        textColor: 'rgb(255, 0, 0)',
        backgroundColor: 'rgb(255, 0, 0,.4)',
        classNames: ['eventClass'],
        timeFrom: this.appointmentForm.value.timeFrom,
        timeTo: this.appointmentForm.value.timeTo,
        date: this.appointmentForm.value.date
    })
  }

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    this.calendarApi = this.calendarComponent.getApi();
    if (this.type > 0) this.calendarApi.next();
    else this.calendarApi.prev();
  }
}

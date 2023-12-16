import {
  Component,
  OnInit,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CalendarOptions } from '@fullcalendar/core';
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
  type: any;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    themeSystem: 'bootstrap5',
    height: 500,
    plugins: [dayGridPlugin],
    weekends: false, // initial value
    events: [
      {
        title: 'event 1',
        textColor: 'green',
        backgroundColor: 'aquamarine',
        classNames: ['eventClass'],
        date: '2023-12-16',
      },
      {
        title: 'event 1',
        textColor: 'rgb(255, 0, 0)',
        backgroundColor: 'rgb(255, 0, 0,.4)',
        classNames: ['eventClass'],
        date: '2023-12-16',
      },
      // { title: 'event 1',textColor:"rgb(187, 187, 1)",backgroundColor:"rgb(187, 187, 1,.4)",classNames:[ 'eventClass' ], date: '2023-12-16' },
      {
        title: 'event 1',
        textColor: 'rgb(187, 187, 1)',
        backgroundColor: 'rgb(187, 187, 1,.4)',
        classNames: ['eventClass'],
        date: '2023-12-12',
      },
      {
        title: 'event 1',
        textColor: 'green',
        backgroundColor: 'aquamarine',
        classNames: ['eventClass'],
        date: '2023-12-10',
      },
      {
        title: 'event 1',
        textColor: 'rgb(255, 0, 0)',
        backgroundColor: 'rgb(255, 0, 0,.4)',
        classNames: ['eventClass'],
        date: '2023-12-20',
      },
      {
        title: 'event 1',
        textColor: 'green',
        backgroundColor: 'aquamarine',
        classNames: ['eventClass'],
        date: '2023-12-13',
      },
      {
        title: 'event 1',
        textColor: 'green',
        backgroundColor: 'aquamarine',
        classNames: ['eventClass'],
        date: '2023-12-27',
      },
      {
        title: 'event 1',
        textColor: 'green',
        backgroundColor: 'aquamarine',
        classNames: ['eventClass'],
        date: '2023-12-30',
      },
      {
        title: 'event 1',
        textColor: 'green',
        backgroundColor: 'aquamarine',
        classNames: ['eventClass'],
        date: '2023-12-17',
      },
      {
        title: 'event 1',
        textColor: 'green',
        backgroundColor: 'aquamarine',
        classNames: ['eventClass'],
        date: '2023-12-307',
      },
    ],
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

  constructor(private form: FormBuilder) {
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
    this.formData = [
      ...this.formData,
      {
        name: this.appointmentForm.value.name,
        date: this.appointmentForm.value.date,
        timeFrom: this.appointmentForm.value.timeFrom,
        timeTo: this.appointmentForm.value.timeTo,
        checkBox: this.appointmentForm.value.checkBoxte,
        nickName: this.appointmentForm.value.nickName,
        email: this.appointmentForm.value.email,
        description: this.appointmentForm.value.description,
      },
    ];
    console.log(this.formData);
  }

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    this.calendarApi = this.calendarComponent.getApi();
    if (this.type == 'n') {
      this.calendarApi.next();
    } else {
      this.calendarApi.prev();
    }
  }
}

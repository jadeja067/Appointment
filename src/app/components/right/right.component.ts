import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    themeSystem: 'bootstrap5',
    height: 500,
    headerToolbar: false,
    plugins: [dayGridPlugin]
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

  constructor(form: FormBuilder) {
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

}

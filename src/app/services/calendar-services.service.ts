import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CalendarServicesService {
  type: string = ''
  events: any[] = [
      {
        title: 'event 1',
        textColor: 'green',
        backgroundColor: 'aquamarine',
        classNames: ['eventClass'],
        timeFrom: '11:00',
        timeTo: '12:00',
        date: '2023-12-07',
      },
      {
        title: 'event 1',
        textColor: 'rgb(255, 0, 0)',
        backgroundColor: 'rgb(255, 0, 0,.4)',
        classNames: ['eventClass'],
        timeFrom: '11:00',
        timeTo: '12:00',
        date: '2023-12-05',
      },
      {
        title: 'event 1',
        textColor: 'green',
        backgroundColor: 'aquamarine',
        classNames: ['eventClass'],
        timeFrom: '17:00',
        timeTo: '19:00',
        date: '2023-12-17',
      },
      {
        title: 'event 1',
        textColor: 'rgb(255, 0, 0)',
        backgroundColor: 'rgb(255, 0, 0,.4)',
        classNames: ['eventClass'],
        timeFrom: '11:00',
        timeTo: '12:00',
        date: '2023-12-20',
      },
    ]
  data = Observable.create((observer: any) => observer.next(this.events))
  constructor() { }
  toggleCalendar(s: string): void{
    this.type = s
  }
  addEvent(data: any){
    this.events.push(data)
  }
  getEvent(){
    return this.data
  }

}

import { Injectable } from '@angular/core';
import { Observable, observeOn } from 'rxjs';
import { Event } from '../classes/event';

@Injectable({
  providedIn: 'root',
})
export class CalendarServicesService {
  type: string = '';
  newEvent!: Event;
  Date: Date = new Date();
  today: any = [
    this.Date.getFullYear(),
    this.Date.getMonth() + 1,
    this.Date.getDate(),
  ].join('-');
  date: string | any = this.today;
  events: Event[] = [
    {
      title: 'Drink Water',
      textColor: 'green',
      backgroundColor: 'aquamarine',
      classNames: ['eventClass'],
      timeFrom: '11:00',
      timeTo: '11:05',
      date: '2023-12-07',
    },
    {
      title: 'Eat Food',
      textColor: 'rgb(255, 0, 0)',
      backgroundColor: 'rgb(255, 0, 0,.4)',
      classNames: ['eventClass'],
      timeFrom: '11:00',
      timeTo: '12:00',
      date: '2023-12-05',
    },
    {
      title: 'Reading',
      textColor: 'green',
      backgroundColor: 'aquamarine',
      classNames: ['eventClass'],
      timeFrom: '18:00',
      timeTo: '19:00',
      date: '2023-12-19',
    },
    {
      title: 'Writting',
      textColor: 'green',
      backgroundColor: 'aquamarine',
      classNames: ['eventClass'],
      timeFrom: '19:00',
      timeTo: '20:00',
      date: '2023-12-19',
    },
    {
      title: 'event 1',
      textColor: 'rgb(255, 0, 0)',
      backgroundColor: 'rgb(255, 0, 0,.4)',
      classNames: ['eventClass'],
      timeFrom: '11:00',
      timeTo: '12:00',
      date: '2023-12-13',
    },
    {
      title: 'event 1',
      textColor: 'rgb(255, 0, 0)',
      backgroundColor: 'rgb(255, 0, 0,.4)',
      classNames: ['eventClass'],
      timeFrom: '11:00',
      timeTo: '12:00',
      date: '2023-12-13',
    },
    {
      title: 'event 1',
      textColor: 'rgb(255, 0, 0)',
      backgroundColor: 'rgb(255, 0, 0,.4)',
      classNames: ['eventClass'],
      timeFrom: '11:00',
      timeTo: '12:00',
      date: '2023-12-15',
    },
    {
      title: 'event 1',
      textColor: 'rgb(255, 0, 0)',
      backgroundColor: 'rgb(255, 0, 0,.4)',
      classNames: ['eventClass'],
      timeFrom: '11:00',
      timeTo: '12:00',
      date: '2023-12-28',
    },
    {
      title: 'event 1',
      textColor: 'rgb(255, 0, 0)',
      backgroundColor: 'rgb(255, 0, 0,.4)',
      classNames: ['eventClass'],
      timeFrom: '11:00',
      timeTo: '12:00',
      date: '2023-12-22',
    },
    {
      title: 'event 1',
      textColor: 'rgb(255, 0, 0)',
      backgroundColor: 'rgb(255, 0, 0,.4)',
      classNames: ['eventClass'],
      timeFrom: '11:00',
      timeTo: '12:00',
      date: '2023-12-21',
    },
    {
      title: 'event 1',
      textColor: 'rgb(255, 0, 0)',
      backgroundColor: 'rgb(255, 0, 0,.4)',
      classNames: ['eventClass'],
      timeFrom: '11:00',
      timeTo: '12:00',
      date: '2023-12-25',
    },
  ];
  data = new Observable((observer: any) => observer.next(this.events));
  constructor() {}
  toggleCalendar(s: string): void {
    this.type = s;
  }
  addEvent(data: any) {
    this.newEvent = data;
    this.data.subscribe((d:any) => {
      d.push(data)
    })
  }
  getEvent() {
    return this.data;
  }
  filterEvents(date?: string) {
    this.date = date
  }
}

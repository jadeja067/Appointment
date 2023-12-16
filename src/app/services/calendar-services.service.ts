import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarServicesService {
  type: string = ''
  constructor() { }
  toggleCalendar(s: string): void{
    this.type = s
  }
}

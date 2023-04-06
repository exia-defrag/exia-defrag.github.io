import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISchedule, ScheduleData } from 'src/app/data/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor() { }

  getSchedule(): Observable<Array<ISchedule>>{
    return of(ScheduleData)
  }
}

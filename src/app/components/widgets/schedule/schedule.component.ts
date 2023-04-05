import { Component, OnInit } from '@angular/core';
import { ISchedule, ScheduleData } from 'src/app/data/schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  scheduleData: Array<ISchedule> = ScheduleData

  constructor() { }

  ngOnInit(): void {
  }

}

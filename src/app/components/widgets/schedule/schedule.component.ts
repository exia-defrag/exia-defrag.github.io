import { Component, OnInit } from '@angular/core';
import { ISchedule } from 'src/app/data/schedule';
import { ScheduleService } from 'src/app/services/repositories/schedule/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  scheduleData: Array<ISchedule> = []

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.scheduleService.getSchedule().subscribe((schedule) => {
      this.scheduleData = schedule
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { IExiaFragement } from 'src/app/data/fragementsOfExia';
import { ExiaService } from 'src/app/services/repositories/exia/exia.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  fragmentsOfExia: Array<IExiaFragement> = []

  constructor(private exiaService: ExiaService) { }

  ngOnInit(): void {
    this.exiaService.getFragments().subscribe((fragementsOfExia) => {
      this.fragmentsOfExia = fragementsOfExia
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { IFeaturedPanel } from 'src/app/data/featuredPanel';
import { FeaturedPanelService } from 'src/app/services/repositories/featuredPanel/featured-panel.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  featuredData: Array<IFeaturedPanel> = []

  constructor(private featuredPanelService: FeaturedPanelService) { }

  ngOnInit(): void {
    this.featuredPanelService.get().subscribe((featuredData) => {
      this.featuredData = featuredData
    })
  }

}

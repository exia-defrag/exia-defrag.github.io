import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FeaturedPanelData, IFeaturedPanel } from 'src/app/data/featuredPanel';

@Injectable({
  providedIn: 'root'
})
export class FeaturedPanelService {

  constructor() { }

  get(): Observable<Array<IFeaturedPanel>> {
    return of(FeaturedPanelData)
  }
}

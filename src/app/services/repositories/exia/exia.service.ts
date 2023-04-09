import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExiaFragmentData, IExiaFragement } from 'src/app/data/fragementsOfExia';
import { GameData, IGame } from 'src/app/data/game';

@Injectable({
  providedIn: 'root'
})
export class ExiaService {
  iGamePlaceholder: Array<IGame> = []

  constructor() { }

  getFragments(): Observable<Array<IExiaFragement>> {
    return of(ExiaFragmentData)
  }

  getExiaDefiningGames(): Observable<Array<IGame>> {
    return of(GameData.filter(x => x.defineMe == true))
  }

}

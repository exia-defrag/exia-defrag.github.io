import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExiaFragmentData, IExiaFragement } from 'src/app/data/fragementsOfExia';

@Injectable({
  providedIn: 'root'
})
export class ExiaService {

  constructor() { }

  getFragments(): Observable<Array<IExiaFragement>> {
    return of(ExiaFragmentData)
  }

}

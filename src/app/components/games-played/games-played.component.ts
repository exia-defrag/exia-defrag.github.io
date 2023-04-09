import { Component, OnInit } from '@angular/core';
import { IGame } from 'src/app/data/game';
import { ExiaService } from 'src/app/services/repositories/exia/exia.service';

@Component({
  selector: 'app-games-played',
  templateUrl: './games-played.component.html',
  styleUrls: ['./games-played.component.scss']
})
export class GamesPlayedComponent implements OnInit {
  exiaDefiningGames: Array<IGame> = []

  constructor(private exiaService: ExiaService) { }

  ngOnInit(): void {
    this.exiaService.getExiaDefiningGames().subscribe((gameList) => {
      this.exiaDefiningGames = gameList
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { faEarthAsia, faBriefcase, faCalendarWeek, faChess, faChessBoard } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faTwitch, faGithub, faGitlab, faDiscord } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss']
})
export class HomeHeroComponent implements OnInit {
  faEarthAsia = faEarthAsia;
  faBriefcase = faBriefcase;
  faCalendarWeek = faCalendarWeek;
  faChess = faChess;
  faChessBoard = faChessBoard;

  faYoutube = faYoutube;
  faTwitch = faTwitch
  faGithub = faGithub;
  faGitlab = faGitlab;
  faDiscord = faDiscord;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{

  }
}

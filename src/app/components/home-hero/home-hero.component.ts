import { Component, OnInit } from '@angular/core';
import { faYoutube, faTwitch, faGithub, faGitlab, faDiscord } from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss']
})

export class HomeHeroComponent implements OnInit {
  /**
   * Page Config
   */
  youtubeUrl = "https://www.youtube.com/user/Stiltzkin94"
  twitchUrl = "https://www.twitch.tv/its_exia00"
  discordUrl = "#"
  githubUrl = "https://github.com/exia-defrag"
  gitlabUrl = "https://gitlab.com/exia.defrag"



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

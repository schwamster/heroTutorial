import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './Hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit 
{
  heroes: Hero[];

  title = 'Tour of heroes';

  selectedHero: Hero;

  constructor(private heroService: HeroService)
  {  }

   ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}



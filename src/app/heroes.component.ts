// import { Component } from '@angular/core';
// import { OnInit } from '@angular/core';

// import { Hero } from './Hero';
// import { HeroService } from './hero.service';

// @Component({
//     selector: 'my-heroes',
//     templateUrl: './heroes.component.html',
//     styleUrls: ['./app.component.css'],
//     providers: [HeroService]
// })

// export class HeroesComponent implements OnInit
// {
//     heroes: Hero[];

//     title = 'Tour of heroes';

//     selectedHero: Hero;

//     constructor(private heroService: HeroService)
//     {
//     }

//     ngOnInit(): void
//     {
//         this.getHeroes();
//     }

//     getHeroes(): void
//     {
//         this.heroService.getHeroes().then(h => this.heroes = h);
//     }

//     onSelect(hero: Hero): void
//     {
//         this.selectedHero = hero;
//     }
// }



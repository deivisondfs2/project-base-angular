import { HeroesService } from './../heroes.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Hero } from '../hero';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private heroesService: HeroesService,
    private route: ActivatedRoute,
    private location: Location

  ) { }

  @Input() hero: Hero;

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.heroesService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroesService.update(this.hero)
      .then(() => this.goBack());
  }

}

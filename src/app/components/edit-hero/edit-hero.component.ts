import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/models/super-hero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
@Input() hero? : SuperHero;
@Output() heroesUpdated = new EventEmitter<SuperHero[]>();

// services are injected into the constructor, which means edit hero has access to the service's methods
  constructor(private superHeroService:SuperHeroService) { }
  //whatever is here is ran at initialization
  ngOnInit(): void {
  }
  //this function doesn't actually return anything, if anything it uses the updateHero method from the service and subscribes to it. Subscriptions are done to event emitters
  updateHero(hero: SuperHero): void{
    this.superHeroService
    .updateHero(hero)
    .subscribe((heroes : SuperHero[]) => this.heroesUpdated.emit(heroes));
  }
  createHero(hero: SuperHero): void{
    this.superHeroService
    .createHero(hero)
    .subscribe((heroes: SuperHero[])=> this.heroesUpdated.emit(heroes));
  }
  deleteHero(hero: SuperHero): void{
    this.superHeroService
    .deleteHero(hero)
    .subscribe((heroes: SuperHero[])=> this.heroesUpdated.emit(heroes));
  }
}

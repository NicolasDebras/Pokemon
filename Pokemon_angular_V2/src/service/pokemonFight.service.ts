import { Injectable } from '@angular/core';
import { Pokemon, pokemonfight } from 'src/interface/pokemonProps';
import { Subject, Observable, BehaviorSubject, pipe, observable, map } from 'rxjs';
import { PokemonAPIService } from './pokemon-api.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonFightService {
  private Pokemon1: Subject<Pokemon> = new Subject<Pokemon>();
  private Pokemon2: Subject<Pokemon> = new Subject<Pokemon>();
  private Fight1: Subject<pokemonfight> = new Subject<pokemonfight>();
  private Fight2: Subject<pokemonfight> = new Subject<pokemonfight>();

  Pokemon1_sub!: Pokemon
  Pokemon2_sub!: Pokemon

  Fight1_sub!: pokemonfight;
  Fight2_sub!: pokemonfight;

  sharedData$: Observable<Pokemon> = this.Pokemon1.asObservable();
  sharedData2$: Observable<Pokemon> = this.Pokemon2.asObservable();

  shareFight$: Observable<pokemonfight> = this.Fight1.asObservable();
  shareFight2$: Observable<pokemonfight> = this.Fight2.asObservable();

  constructor(private service: PokemonAPIService) { }

  setData(updatedData: Pokemon) {
    this.Pokemon1.next(updatedData);
    this.Pokemon1_sub = updatedData
  }

  setData2(updatedData: Pokemon) {
    this.Pokemon2.next(updatedData);
  }

  setDataFight(updatedData: pokemonfight) {
    this.Fight1.next(updatedData);
    this.Fight1_sub = updatedData;
  }

  setDataFight2(updatedData: pokemonfight): void {
    this.Fight2.next(updatedData);
    this.Fight2_sub = updatedData;
  }

  toto: number = 10;

  attack1to2() {
    console.log("putaon")
    let count = this.Pokemon1_sub.moves.length;
    let te = Math.random() * (count - 1 - 0) + 0
    let attck = this.Pokemon1_sub.moves[3] // a changer 
    this.service.getMovesData(attck.move.url).subscribe(moves => {
      console.log(moves)

      console.log(this.Fight2_sub)
      if (this.Fight2_sub.currenthp1 > 0)
        return
      this.setDataFight2({
        lvl1: this.Fight2_sub.lvl1,
        maxhp1: this.Fight2_sub.maxhp1,
        php1: ((this.Fight2_sub.currenthp1 - moves.power) * 100) / this.Fight2_sub.maxhp1,
        currenthp1: this.Fight2_sub.currenthp1 - moves.power
      })
    })
  }

  test(): Observable<Pokemon> {
    let ob = new Observable<Pokemon>()
    this.attack1to2()
    this.setDataFight2({
      lvl1: this.Fight2_sub.lvl1,
      maxhp1: this.Fight2_sub.maxhp1,
      php1: 10,
      currenthp1: this.Fight2_sub.currenthp1 - 10
    })
    console.log(this.Fight2_sub.currenthp1)
    return ob

  }



} 
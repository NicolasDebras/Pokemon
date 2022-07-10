import { Injectable } from '@angular/core';
import { Pokemon, pokemonfight } from 'src/interface/pokemonProps';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { PokemonAPIService } from './pokemon-api.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonFightService {
  private Pokemon1: Subject<Pokemon> = new Subject<Pokemon>();
  private Pokemon2: Subject<Pokemon> = new Subject<Pokemon>();
  private Fight1: Subject<pokemonfight> = new Subject<pokemonfight>();
  private Fight2: Subject<pokemonfight> = new Subject<pokemonfight>();

  sharedData$: Observable<Pokemon> = this.Pokemon1.asObservable();
  sharedData2$: Observable<Pokemon> = this.Pokemon2.asObservable();

  shareFight$: Observable<pokemonfight> = this.Fight1.asObservable();
  shareFight2$: Observable<pokemonfight> = this.Fight2.asObservable();

  constructor(private service: PokemonAPIService) { }

  setData(updatedData: Pokemon) {
    this.Pokemon1.next(updatedData);
  }

  setData2(updatedData: Pokemon) {
    this.Pokemon2.next(updatedData);
  }

  setDataFight(updatedData: pokemonfight) {
    this.Fight1.next(updatedData);
  }

  setDataFight2(updatedData: pokemonfight): void {
    this.Fight2.next(updatedData);
  }

  attack1to2() {
    this.sharedData$.subscribe(response => {
      let count = response.moves.length;
      let te = Math.random() * (count - 1 - 0) + 0
      let attck = response.moves[40] // a changer 
      console.log(attck.move.url)
      this.service.getMovesData(attck.move.url).subscribe(moves => {
        console.log(moves)
        this.shareFight2$.subscribe(pokemon2 => {
          console.log(pokemon2)
          this.setDataFight2({
            lvl1: pokemon2.lvl1,
            maxhp1: pokemon2.maxhp1,
            php1: ((pokemon2.currenthp1 - moves.power) * 100) / pokemon2.maxhp1,
            currenthp1: pokemon2.currenthp1 - moves.power
          })
        })
      })
    })
  }


} 
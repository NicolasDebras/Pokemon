import { Injectable } from '@angular/core';
import { listFight, MovesPokemon, Pokemon, pokemonfight } from 'src/interface/pokemonProps';
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
  sharedData$: Observable<Pokemon> = this.Pokemon1.asObservable();
  sharedData2$: Observable<Pokemon> = this.Pokemon2.asObservable();
  shareFight$: Observable<pokemonfight> = this.Fight1.asObservable();
  shareFight2$: Observable<pokemonfight> = this.Fight2.asObservable();

  listAction: listFight[] = []

  Pokemon1_sub!: Pokemon
  Pokemon2_sub!: Pokemon

  Fight1_sub!: pokemonfight;
  Fight2_sub!: pokemonfight;

  play: boolean = false

  private list: MovesPokemon[] = [{ name: "charge", attack: 10 }]

  private type_names: string[] = ["normal", "fighting", "flying", "poison", "ground", "rock",
    "bug", "ghost", "steel", "fire", "water", "grass", "electric",
    "psychic", "ice", "dragon", "dark", "Fairy"];

  private type_matchups : number[][]= [
     [1, 1, 1, 1, 1, 0.5, 1, 0, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1],
     [2, 1, 0.5, 0.5, 1, 2, 0.5, 0, 2, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5],
     [1, 2, 1, 1, 1, 0.5, 2, 1, 0.5, 1, 1, 2, 0.5, 1, 1, 1, 1, 1],
    [1, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2],
     [1, 1, 0, 2, 1, 2, 0.5, 1, 2, 2, 1, 0.5, 2, 1, 1, 1, 1, 1],
    [1, 1, 2, 1, 0.5, 1, 2, 1, 0.5, 2, 1, 1, 1, 1, 2, 1, 1, 1],
     [1, 0.5, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 0.5, 1, 2, 1, 2, 1, 1, 2, 0.5],
    [0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 1],
     [1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 1, 2, 1, 1, 2],
    [1, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5, 0.5, 2, 1, 1, 2, 0.5, 1, 1],
     [1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 1, 0.5, 1, 1],
     [1, 1, 0.5, 0.5, 2, 2, 0.5, 1, 0.5, 0.5, 2, 0.5, 1, 1, 1, 0.5, 1, 1],
     [1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 0.5, 1, 1],
    [1, 2, 1, 2, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 1, 0, 1],
     [1, 1, 2, 1, 2, 1, 1, 1, 0.5, 0.5, 0.5, 2, 1, 1, 0.5, 2, 1, 1],
     [1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 2, 1, 0],
     [1, 0.5, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5],
     [1, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1, 1, 2, 2, 1],

  ];



  constructor(private service: PokemonAPIService) { }

  setData(updatedData: Pokemon) {
    this.Pokemon1.next(updatedData);
    this.Pokemon1_sub = updatedData
  }

  setData2(updatedData: Pokemon) {
    this.Pokemon2.next(updatedData);
    this.Pokemon2_sub = updatedData
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

  async test(): Promise<Observable<Pokemon>> {
    let ob = new Observable<Pokemon>()
    while (!this.play) {
      if (this.Pokemon2_sub.stats[5].base_stat < this.Pokemon1_sub.stats[5].base_stat) {
        this.reciveDomagePokemon1(0);
        await new Promise(f => setTimeout(f, 1000));
        this.reciveDomagePokemon2(0)
        await new Promise(f => setTimeout(f, 1000));
      }
      else {
        this.reciveDomagePokemon2(0);
        await new Promise(f => setTimeout(f, 1000));
        this.reciveDomagePokemon1(0)
        await new Promise(f => setTimeout(f, 1000));
      }
    }
    console.log(this.Fight2_sub.currenthp1)
    return ob

  }

  reciveDomagePokemon2(indexMove: number) {
    this.setDataFight2({
      lvl1: this.Fight2_sub.lvl1,
      maxhp1: this.Fight2_sub.maxhp1,
      php1: ((this.Fight2_sub.currenthp1 - this.list[indexMove].attack) * 100) / this.Fight2_sub.maxhp1,
      currenthp1: this.Fight2_sub.currenthp1 - this.list[indexMove].attack
    })
    this.dommage(this.Pokemon1_sub.types[0].type.name, this.Pokemon1_sub.types[0].type.name, 1)
    if (this.Fight2_sub.currenthp1 < 0) {
      this.play = true
    }
    this.listAction.push({ action: this.Pokemon2_sub.name.toUpperCase() + " utilise " + this.list[indexMove].name.toUpperCase(), color: "red" })
  }
  reciveDomagePokemon1(indexMove: number) {
    this.setDataFight({
      lvl1: this.Fight1_sub.lvl1,
      maxhp1: this.Fight1_sub.maxhp1,
      php1: ((this.Fight1_sub.currenthp1 - this.list[indexMove].attack) * 100) / this.Fight1_sub.maxhp1,
      currenthp1: this.Fight1_sub.currenthp1 - this.list[indexMove].attack
    })
    if (this.Fight1_sub.currenthp1 < 0) {
      this.play = true
    }
    this.listAction.push({ action: this.Pokemon1_sub.name.toUpperCase() + " utilise " + this.list[indexMove].name.toUpperCase(), color: "green" })
  }
  dommage(type1 : string, type2 : string,  dommage : number) {
    let index = this.type_names.indexOf(type1)
    let index2 = this.type_names.indexOf(type2)
    console.log(index)
    console.log(index2)
  }


} 
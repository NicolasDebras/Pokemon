import { Component, Input, OnInit } from '@angular/core';
import { PokemonFightService } from 'src/service/pokemonFight.service';

@Component({
  selector: 'app-cardinfopokemon',
  templateUrl: './cardinfopokemon.component.html',
  styleUrls: ['./cardinfopokemon.component.css']
})
export class CardinfopokemonComponent implements OnInit {

  nom_pokemon: string = ""
  lvl: string = "1"
  value : number = 100

  @Input() back: boolean = false

  constructor(private fight: PokemonFightService) { }

  ngOnInit(): void {
    if (this.back == false) {
      this.fight.sharedData$.subscribe(response => {
        this.nom_pokemon = response.name
      })
      this.fight.shareFight$.subscribe(response => {
        this.lvl = response.lvl1
        this.value = response.php1
      })
    }
    else {
      this.fight.sharedData2$.subscribe(response => {
        this.nom_pokemon = response.name
      })
      this.fight.shareFight2$.subscribe(response => {
        this.lvl = response.lvl1
        this.value = response.php1
      })
    }
  }

}

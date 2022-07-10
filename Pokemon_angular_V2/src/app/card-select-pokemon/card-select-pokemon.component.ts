import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon, TYPE_COLOURS } from 'src/interface/pokemonProps';
import { PokemonAPIService } from 'src/service/pokemon-api.service';

@Component({
  selector: 'app-card-select-pokemon',
  templateUrl: './card-select-pokemon.component.html',
  styleUrls: ['./card-select-pokemon.component.css']
})
export class CardSelectPokemonComponent implements OnInit, OnChanges {

  name: string = "?"
  type: string = "?"
  url_pokemon: string = ""
  @Input() selectPokemon = ''
  test : any


  constructor(private service: PokemonAPIService) { }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.service.getPokemonData(changes['selectPokemon'].currentValue).subscribe(response => {
      this.name = response.name,
        this.type = response.types[0].type.name
      if (response.types[1] != null) {
        this.type = this.type + ', ' + response.types[1].type.name
      }
      this.url_pokemon = response.sprites.front_default
    })
  }


  // a changer 
  _getTypeColour(type: string): string {
    if (type == 'bug')
      return '#' + TYPE_COLOURS["bug"];
    if (type == '')
      return '#' + TYPE_COLOURS["dark"];
    if (type == 'bug')
      return '#' + TYPE_COLOURS["dragon"];
    if (type == 'electric')
      return '#' + TYPE_COLOURS["electric"];
    if (type == 'fairy')
      return '#' + TYPE_COLOURS["fairy"];
    if (type == 'fighting')
      return '#' + TYPE_COLOURS["fighting"];
    if (type == 'fire')
      return '#' + TYPE_COLOURS["fire"];
    if (type == 'flying')
      return '#' + TYPE_COLOURS["flying"];
    if (type == 'grass')
      return '#' + TYPE_COLOURS["grass"];
    if (type == 'ground')
      return '#' + TYPE_COLOURS["ground"];
    if (type == 'ice')
      return '#' + TYPE_COLOURS["ice"];
    if (type == 'normal')
      return '#' + TYPE_COLOURS["normal"];
    if (type == 'poison')
      return '#' + TYPE_COLOURS["poison"];
    if (type == 'psychic')
      return '#' + TYPE_COLOURS["psychic"];
    if (type == 'rock')
      return '#' + TYPE_COLOURS["rock"];
    if (type == 'steel')
      return '#' + TYPE_COLOURS["steel"];
    if (type == 'water')
      return '#' + TYPE_COLOURS["water"];
    return ""
  }

}

import { Component, OnInit } from '@angular/core';
import { PokemonAPIService } from '../services/pokemon-api.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  inputs :  ['back']
})
export class PokemonComponent implements OnInit {


  dataPokemon:any = [];
  back: boolean = false;

  constructor(private service:PokemonAPIService) { }

  nom_pokemon = "";
  url_pokemon ="";
  pokemon_pv = "";

  ngOnInit(): void {
    this.service.getPokemonData().subscribe(response=>{
      //console.log(response);
      this.nom_pokemon = response.name;
      if (this.back == false)
        this.url_pokemon = response.sprites.front_default;
      else
        this.url_pokemon = response.sprites.back_default;
      this.pokemon_pv = "/" + response.stats[0].base_stat
      //this.nom_pokemon = JSON.parse(response);

    })
  }



}


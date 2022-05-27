import { Component, OnInit } from '@angular/core';
import { PokemonAPIService } from '../services/pokemon-api.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {


  dataPokemon:any = [];

  constructor(private service:PokemonAPIService) { }

  nom_pokemon = "";

  ngOnInit(): void {
    this.service.getPokemonData().subscribe(response=>{
      //console.log(response);
      this.dataPokemon = response;
      //this.nom_pokemon = JSON.parse(response);
      const objKeys = Object.values(response);
      console.log(objKeys[10]);
      this.nom_pokemon = objKeys[10];

    })
  }



}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../interfaces/pokemonProps';

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIService {
  private url = 'https://pokeapi.co/api/v2/pokemon/1';
  constructor(private httpClient: HttpClient) { }

  getPokemonData(){
    return this.httpClient.get<Pokemon>(this.url);
  }

}

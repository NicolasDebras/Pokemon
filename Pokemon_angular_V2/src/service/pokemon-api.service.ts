import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../interface/pokemonProps'
import { Moves } from 'src/interface/movesprops';

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIService {
  private url = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private httpClient: HttpClient) { }

  getPokemonData(id : string){
    return this.httpClient.get<Pokemon>(this.url + id);
  }
  getMovesData(url : string) {
    return this.httpClient.get<Moves>(url)
  }

}
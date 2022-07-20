import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/interface/pokemonProps';
import { PokemonAPIService } from 'src/service/pokemon-api.service';
import { PokemonFightService } from 'src/service/pokemonFight.service';

@Component({
  selector: 'app-page-fight',
  templateUrl: './page-fight.component.html',
  styleUrls: ['./page-fight.component.css']
})
export class PageFightComponent implements OnInit {

  id1: string = ""
  id2: string = ""
  pokemon1?: Pokemon
  pokemon2?: Pokemon
  @Input() back = false
  url_pokemon1: string = ""
  url_pokemon2: string = ""
  alive_pokemon1 : boolean = true

  constructor(private router: Router, private service: PokemonAPIService
    , private fight: PokemonFightService) { }

  ngOnInit(): void {
    let tab = this.router.url.split('/')
    this.id1 = tab[2]
    this.id2 = tab[3]
    this.service.getPokemonData((this.id1.split('-')[0])).subscribe({
      next: response => {
        this.pokemon1 = response
        this.fight.setData(response)
        this.fight.setDataFight({
          lvl1: this.id1.split('-')[1],
          maxhp1: response.stats[0].base_stat,
          php1: 100,
          currenthp1: response.stats[0].base_stat,
        })
        this.url_pokemon1 = response.sprites.front_default
      },
      error: console.error
    })

    this.service.getPokemonData((this.id2.split('-')[0])).subscribe({
      next: response => {
        this.fight.setData2(response)
        this.url_pokemon2 = response.sprites.back_default;
        this.fight.setDataFight2({
          lvl1: this.id2.split('-')[1],
          maxhp1: response.stats[0].base_stat,
          php1: 100,
          currenthp1: response.stats[0].base_stat,
        })
      },
      error: console.error
    })

    
    //console.log(this.fight.Fight1_sub.currenthp1)
    this.fight.test()
    console.log('test')


  }
}

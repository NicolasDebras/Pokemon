import { Component, OnInit } from '@angular/core';
import { listFight } from 'src/interface/pokemonProps';
import { PokemonFightService } from 'src/service/pokemonFight.service';

@Component({
  selector: 'app-logger-fight',
  templateUrl: './logger-fight.component.html',
  styleUrls: ['./logger-fight.component.css']
})
export class LoggerFightComponent implements OnInit {

  listAction : listFight[] = []
  colors = [{ status: "green", color: "red" }, { status: "red", color: "red" }, 
                { status: "warning", color: "green" }, { status: "Ignored", color: "yellow" }]

  constructor(private fight: PokemonFightService) { }

  ngOnInit(): void {
    this.listAction = this.fight.listAction
  }

  getTheColor(status :string) {
    return this.colors.filter(item => item.status === status)[0].color 
    // could be better written, but you get the idea
}

}

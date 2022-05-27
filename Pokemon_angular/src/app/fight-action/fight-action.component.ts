import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fight-action',
  templateUrl: './fight-action.component.html',
  styleUrls: ['./fight-action.component.css']
})
export class FightActionComponent implements OnInit {

  constructor() { }

  nom_attaque = ""
  items : number = 0;

  ngOnInit(): void {

    this.nom_attaque = "queue de fer";
    this.items = 4
  }

}
export class Tabattack{


  constructor() {

  }
}

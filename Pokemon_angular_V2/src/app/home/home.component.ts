import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectpokemon2 : string = ""
  selectpokemon1 : string = ""

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  selectPokemon2(selectpokemon2 : string) {
    this.selectpokemon2 = selectpokemon2

  }
  selectPokemon1(selectpokemon1 : string) {
    this.selectpokemon1 = selectpokemon1
    
  }
  startfight() {
    if (this.selectpokemon1 != "" && this.selectpokemon2 != "")
      this.router.navigateByUrl('fight/' + this.selectpokemon1 + '/' + this.selectpokemon2)
  }
}

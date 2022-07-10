import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-select',
  templateUrl: './card-select.component.html',
  styleUrls: ['./card-select.component.css']
})
export class CardSelectComponent implements OnInit {

  num : string  = "1"
  selectpokemonB : boolean = false;
  id : string = ""
  thumbLabel = false
  value: number = 1
  @Output() idlvl = new EventEmitter<string>()

  constructor() {}

  ngOnInit() {
  }

  public selectPokemon(newItem: string) {
    this.selectpokemonB = true
    this.id = newItem
    this.idlvl.emit(this.id + '-' + this.value.toString())
  }

  public changeLVL(value : number) {
    this.idlvl.emit(this.id + '-' + value.toString())
  }
  

}

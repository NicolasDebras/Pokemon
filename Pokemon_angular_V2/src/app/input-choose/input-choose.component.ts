import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export interface StateGroup {
  letter: string;
  names: string[];
}
export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();
  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-input-choose',
  templateUrl: './input-choose.component.html',
  styleUrls: ['./input-choose.component.css']
})
export class InputChooseComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  ngOnInit() {
  }


  public findPokemon(id : string) {
    if (id != "")
      this.newItemEvent.emit(id);
  }
}

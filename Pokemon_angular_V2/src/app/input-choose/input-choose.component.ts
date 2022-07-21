import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Result } from 'src/interface/pokemonList';
import { PokemonAPIService } from 'src/service/pokemon-api.service';

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
  selectedData: any = "";
  constructor(private service: PokemonAPIService) { }

  ngOnInit() {
    let obj = {};
    this.service.getPokemonList().subscribe(response => {
      response.results.forEach(item => this.options.push(item.name));;
    })
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

  }

  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions: Observable<string[]> | undefined;

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  
  onSelected() {
    console.log( this.selectedData);
    this.newItemEvent.emit(this.selectedData);

  }


}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSelectPokemonComponent } from './card-select-pokemon.component';

describe('CardSelectPokemonComponent', () => {
  let component: CardSelectPokemonComponent;
  let fixture: ComponentFixture<CardSelectPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSelectPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSelectPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

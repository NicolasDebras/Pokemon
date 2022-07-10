import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardinfopokemonComponent } from './cardinfopokemon.component';

describe('CardinfopokemonComponent', () => {
  let component: CardinfopokemonComponent;
  let fixture: ComponentFixture<CardinfopokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardinfopokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardinfopokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

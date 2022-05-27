import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFightComponent } from './pokemon-fight.component';

describe('PokemonFightComponent', () => {
  let component: PokemonFightComponent;
  let fixture: ComponentFixture<PokemonFightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonFightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

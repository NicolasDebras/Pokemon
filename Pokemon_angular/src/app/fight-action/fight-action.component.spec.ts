import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightActionComponent } from './fight-action.component';

describe('FightActionComponent', () => {
  let component: FightActionComponent;
  let fixture: ComponentFixture<FightActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FightActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerFightComponent } from './logger-fight.component';

describe('LoggerFightComponent', () => {
  let component: LoggerFightComponent;
  let fixture: ComponentFixture<LoggerFightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggerFightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggerFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

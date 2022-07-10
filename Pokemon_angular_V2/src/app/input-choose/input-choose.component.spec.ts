import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputChooseComponent } from './input-choose.component';

describe('InputChooseComponent', () => {
  let component: InputChooseComponent;
  let fixture: ComponentFixture<InputChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputChooseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

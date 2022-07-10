import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFightComponent } from './page-fight.component';

describe('PageFightComponent', () => {
  let component: PageFightComponent;
  let fixture: ComponentFixture<PageFightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

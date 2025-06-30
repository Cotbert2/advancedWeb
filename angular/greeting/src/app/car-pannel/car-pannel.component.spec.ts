import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPannelComponent } from './car-pannel.component';

describe('CarPannelComponent', () => {
  let component: CarPannelComponent;
  let fixture: ComponentFixture<CarPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarPannelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

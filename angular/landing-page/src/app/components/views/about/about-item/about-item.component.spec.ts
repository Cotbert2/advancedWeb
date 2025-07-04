import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutItemComponent } from './about-item.component';

describe('AboutItemComponent', () => {
  let component: AboutItemComponent;
  let fixture: ComponentFixture<AboutItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselHolderComponent } from './carousel-holder.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('CarouselHolderComponent', () => {
  let component: CarouselHolderComponent;
  let fixture: ComponentFixture<CarouselHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselHolderComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

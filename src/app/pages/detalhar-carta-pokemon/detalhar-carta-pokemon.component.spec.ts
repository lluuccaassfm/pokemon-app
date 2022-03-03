import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharCartaPokemonComponent } from './detalhar-carta-pokemon.component';

describe('DetalharCartaPokemonComponent', () => {
  let component: DetalharCartaPokemonComponent;
  let fixture: ComponentFixture<DetalharCartaPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalharCartaPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharCartaPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

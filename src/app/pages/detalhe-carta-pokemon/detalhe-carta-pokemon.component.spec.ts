import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheCartaPokemonComponent } from './detalhe-carta-pokemon.component';

describe('DetalheCartaPokemonComponent', () => {
  let component: DetalheCartaPokemonComponent;
  let fixture: ComponentFixture<DetalheCartaPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheCartaPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheCartaPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

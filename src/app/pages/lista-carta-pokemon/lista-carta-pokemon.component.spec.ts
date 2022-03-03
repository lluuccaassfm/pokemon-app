import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCartaPokemonComponent } from './lista-carta-pokemon.component';

describe('ListaCartaPokemonComponent', () => {
  let component: ListaCartaPokemonComponent;
  let fixture: ComponentFixture<ListaCartaPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCartaPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCartaPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

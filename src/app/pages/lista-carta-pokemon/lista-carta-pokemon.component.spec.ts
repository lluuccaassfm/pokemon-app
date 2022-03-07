import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCartaPokemonComponent } from './lista-carta-pokemon.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe('ListaCartaPokemonComponent', () => {
  let component: ListaCartaPokemonComponent;
  let fixture: ComponentFixture<ListaCartaPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCartaPokemonComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ]
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

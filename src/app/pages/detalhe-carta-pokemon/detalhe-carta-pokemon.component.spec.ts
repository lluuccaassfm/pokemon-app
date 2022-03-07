import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheCartaPokemonComponent } from './detalhe-carta-pokemon.component';
import { MatDialogModule } from "@angular/material/dialog";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('DetalheCartaPokemonComponent', () => {
  let component: DetalheCartaPokemonComponent;
  let fixture: ComponentFixture<DetalheCartaPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheCartaPokemonComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule, MatDialogModule ]
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

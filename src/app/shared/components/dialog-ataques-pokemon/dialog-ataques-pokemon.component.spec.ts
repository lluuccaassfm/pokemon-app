import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAtaquesPokemonComponent } from './dialog-ataques-pokemon.component';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

describe('DialogAtaquesPokemonComponent', () => {
  let component: DialogAtaquesPokemonComponent;
  let fixture: ComponentFixture<DialogAtaquesPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAtaquesPokemonComponent ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: []
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: []
        }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAtaquesPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

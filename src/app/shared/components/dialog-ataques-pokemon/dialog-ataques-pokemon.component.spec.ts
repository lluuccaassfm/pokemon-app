import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAtaquesPokemonComponent } from './dialog-ataques-pokemon.component';

describe('DialogAtaquesPokemonComponent', () => {
  let component: DialogAtaquesPokemonComponent;
  let fixture: ComponentFixture<DialogAtaquesPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAtaquesPokemonComponent ]
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

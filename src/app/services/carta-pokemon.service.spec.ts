import { TestBed } from '@angular/core/testing';

import { CartaPokemonService } from './carta-pokemon.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('CartaPokemonService', () => {
  let service: CartaPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(CartaPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

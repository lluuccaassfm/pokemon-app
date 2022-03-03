import { TestBed } from '@angular/core/testing';

import { CartaPokemonService } from './carta-pokemon.service';

describe('CartaPokemonService', () => {
  let service: CartaPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartaPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

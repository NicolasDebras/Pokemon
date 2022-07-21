import { TestBed } from '@angular/core/testing';

import { PokemonAPIService } from './pokemon-api.service';
import { PokemonFightService } from './pokemonFight.service';

describe('PokemonFightService', () => {
    let service: PokemonFightService;
    beforeEach(() => { service = new PokemonFightService(); });

    it('dommage  X2', () => {
        expect(20).toBe(service.dommage('fire', 'bug', 10));
    });

    it('dommage same type', () => {
        expect(5).toBe(service.dommage('fire', 'fire', 10));
    });
    it('dommage type normal', () => {
        expect(10).toBe(service.dommage('flying', 'fire', 10));
    });

})
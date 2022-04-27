import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Pokedex } from '../interfaces/pokedex.interfaces';
import { Pokemon } from '../interfaces/pokemon.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor( private http : HttpClient ) {}

  getPokedex(): Observable<Pokedex> {
    return this.http.get<Pokedex>("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
  }

  getPokemon(pokemon:string): Observable<Pokemon>{
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  }
}

import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Pokedex } from './interfaces/pokedex.interfaces';
import { Pokemon, Species, Sprites } from './interfaces/pokemon.interfaces';
import { PokedexService } from './services/pokedex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokeApp';
  constructor(private pokedex : PokedexService){}

  pokemos : Pokemon[] = []

  spokemon:any = {}


  ngOnInit():void{
    this.pokedex.getPokedex().subscribe(data => {
      data.results.map(item=> {
        this.pokedex.getPokemon(item.name).subscribe(data => this.pokemos.push(data))
      })
    })
  }

  showPokemon(name:string){
    this.spokemon = this.pokemos.find(item => item.name === name )
  }
}

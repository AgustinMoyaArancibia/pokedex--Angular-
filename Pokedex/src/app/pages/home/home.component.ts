import { Component, OnInit } from '@angular/core';
import { TarjetaPokemonComponent } from '../../components/tarjeta-pokemon/tarjeta-pokemon.component';
import { FotoPokemonComponent } from '../../components/foto-pokemon/foto-pokemon.component';
import { PokemonService } from '../../services/pokemon.service';
import { Resultado } from '../../interfaces/pokeapi';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TarjetaPokemonComponent, FotoPokemonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  listaPokemon:Resultado[]= [];

  constructor(private pokemonService: PokemonService) {

  }

  ngOnInit(): void {
    this.cargarLista()
  }

  async cargarLista(){
   this.listaPokemon = [...this.listaPokemon, ...await this.pokemonService.getByPage()]
   console.log(this.listaPokemon);
  }

}

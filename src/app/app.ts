import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './shared/models/pokemon';
import { PokemonList } from './pokemon-list/pokemon-list';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PokemonList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('adam_taylor_Learning_Angular_F26');
  name = 'Adam Taylor';
  project = 'my-first-project';


}

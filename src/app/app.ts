import { Component, signal } from '@angular/core';
import { PokemonList } from './pokemon-list/pokemon-list';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [PokemonList, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('adam_taylor_Learning_Angular_F26');
  name = 'Adam Taylor';
  //project = 'my-first-project';
}

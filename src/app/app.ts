import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './shared/models/pokemon';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('adam_taylor_Learning_Angular_F26');
  name = 'Adam Taylor';
  project = 'my-first-project';

  pokemonList: Pokemon[] = [
    { id: 1, name: 'Pikachu', gender: 'Male', type: 'Electric', generation: 'First' },
    { id: 2, name: 'Charizard', type: 'Fire', generation: 'First' },
    { id: 3, name: 'Squirtle', gender: 'Female', type: 'Water', generation: 'First' },
    { id: 4, name: 'Lucario', type: 'Fighting', generation: 'Fourth' },
    { id: 5, name: 'Gardevoir', gender: 'Female', type: 'Psychic', generation: 'Third' },
    { id: 6, name: 'Buizel', gender: 'Male', type: 'Water', generation: 'First' },
  ];
}

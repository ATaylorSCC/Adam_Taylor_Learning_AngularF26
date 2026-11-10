import { Component, signal } from '@angular/core';
import { PokemonList } from './pokemon-list/pokemon-list';
import { RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';
import { EditGuard } from './services/edit-guard';
@Component({
  selector: 'app-root',
  imports: [PokemonList, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('adam_taylor_Learning_Angular_F26');
  name = 'Adam Taylor';
  editGuard = inject(EditGuard);
  //project = 'my-first-project';
}

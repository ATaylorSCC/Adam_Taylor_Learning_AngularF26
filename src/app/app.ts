import { Component, signal } from '@angular/core';
import { PokemonList } from './pokemon-list/pokemon-list';
import { RouterOutlet, RouterLink } from '@angular/router';
import { inject } from '@angular/core';
import { EditGuard } from './services/edit-guard';
import { LoadingService } from './services/loading';
import { ErrorService } from './services/error';

@Component({
  selector: 'app-root',
  imports: [PokemonList, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('adam_taylor_Learning_Angular_F26');
  name = 'Adam Taylor';
  editGuard = inject(EditGuard);
  loadingService = inject(LoadingService);
  errorService = inject(ErrorService);
  //project = 'my-first-project';
}

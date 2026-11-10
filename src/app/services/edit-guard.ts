import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditGuard {
  guardEnabled = signal(true);

  toggle(): void {
    this.guardEnabled.update((value) => !value);
  }
}

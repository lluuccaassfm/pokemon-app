import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  getLocale(): string {
    return 'pt-BR';
  }
}

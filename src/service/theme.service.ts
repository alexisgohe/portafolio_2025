import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = false;

  constructor() {}

  // Método para alternar entre modo claro y oscuro
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.applyTheme();
  }

  // Método para aplicar el tema actual
  applyTheme() {
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  // Método para verificar si el modo oscuro está activo
  isDarkMode(): boolean {
    return this.isDarkTheme;
  }
}

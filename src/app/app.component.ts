import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio_2025';
  isDarkMode = false;

  constructor(private themeService: ThemeService) {
    this.isDarkMode = this.themeService.isDarkMode();
  }

  // Método para alternar el tema
  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }
}

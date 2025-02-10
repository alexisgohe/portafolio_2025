import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '../service/theme.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedinIn, faCloudflare, faMailchimp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  imports: [FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faCloudflare = faCloudflare;
  faMailchimp = faMailchimp;

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

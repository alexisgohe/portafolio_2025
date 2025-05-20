import { Component } from '@angular/core';
import { ThemeService } from '../service/theme.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faCloudflare,
  faMailchimp,
} from '@fortawesome/free-brands-svg-icons';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Experiencia {
  compania: string;
  titulo: string;
  descripcion: string;
  inicio: string;
  fin: string;
  icono: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  technologiesImg: string[];
  url: string;
}

@Component({
  selector: 'app-root',
  imports: [FontAwesomeModule, CommonModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faCloudflare = faCloudflare;
  faMailchimp = faMailchimp;

  isDarkMode = false;
  experiencias: Experiencia[] = [];
  proyectos: Project[] = [];

  constructor(
    private themeService: ThemeService,
    private translate: TranslateService
  ) {
    this.isDarkMode = this.themeService.isDarkMode();
    translate.setDefaultLang('es');

    // Suscribirse al cambio de idioma
    this.translate.onLangChange.subscribe(() => {
      this.updateTranslations();
    });
  }

  ngOnInit() {
    AOS.init(); // Inicializar AOS
    this.updateTranslations();
  }

  // Método para actualizar las traducciones
  private updateTranslations() {
    this.translate.get([
      'SEFIPLAN',
      'PROGRAMMER',
      'SEFIPLAN_DESC',
      'CURRENT',
      'JUNE',
      'OCTOBER',
      'HOSPITAL_ANGELES',
      'SYSTEM_OPERATOR',
      'HOSPITAL_DESC',
      'PROJECT_SIAFEV_TITLE',
      'PROJECT_SIAFEV_DESC',
      'PROJECT_VEHICULAR_TITLE',
      'PROJECT_VEHICULAR_DESC',
      'PROJECT_RESTAURANT_TITLE',
      'PROJECT_RESTAURANT_DESC'
    ]).subscribe(translations => {
      this.experiencias = [
        {
          compania: translations['SEFIPLAN'],
          titulo: translations['PROGRAMMER'],
          descripcion: translations['SEFIPLAN_DESC'],
          inicio: translations['JUNE'],
          fin: translations['CURRENT'],
          icono: 'dns',
        },
        {
          compania: translations['HOSPITAL_ANGELES'],
          titulo: translations['SYSTEM_OPERATOR'],
          descripcion: translations['HOSPITAL_DESC'],
          inicio: translations['OCTOBER'],
          fin: translations['JUNE'],
          icono: 'code',
        },
      ];
      this.proyectos = [
        {
          title: translations['PROJECT_SIAFEV_TITLE'],
          description: translations['PROJECT_SIAFEV_DESC'],
          technologies: ['Angular', 'Java EE', 'PostgreSQL'],
          technologiesImg: [
            'assets/icons/angular.svg',
            'assets/icons/java.svg',
            'assets/icons/postgresql.svg',
          ],
          url: 'assets/proyectos.jpg',
        },
        {
          title: translations['PROJECT_VEHICULAR_TITLE'],
          description: translations['PROJECT_VEHICULAR_DESC'],
          technologies: ['React', 'Spring', 'PostgreSQL'],
          technologiesImg: [
            'assets/icons/react.svg',
            'assets/icons/spring.svg',
            'assets/icons/postgresql.svg',
          ],
          url: 'assets/proyectos1.jpg',
        },
        {
          title: translations['PROJECT_RESTAURANT_TITLE'],
          description: translations['PROJECT_RESTAURANT_DESC'],
          technologies: ['React'],
          technologiesImg: ['assets/icons/react.svg'],
          url: 'assets/proyectos1.jpg',
        },
      ];
    });
  }

  // Método para alternar el tema
  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }

  switchLanguage() {
    const currentLang = this.translate.currentLang;
    const newLang = currentLang === 'en' ? 'es' : 'en';
    this.translate.use(newLang);
  }
}

import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faCloudflare,
  faMailchimp,
} from '@fortawesome/free-brands-svg-icons';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ThemeService } from '../service/theme.service';

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
  button: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
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
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isDarkMode = this.themeService.isDarkMode();
    this.translate.setDefaultLang('es');

    this.translate.onLangChange.subscribe(() => {
      this.updateTranslations();
    });
  }

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const AOS = await import('aos');
      AOS.init();
    }
    this.updateTranslations();
  }

  // Método para actualizar las traducciones
  private updateTranslations() {
    this.translate
      .get([
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
        'PROJECT_RESTAURANT_DESC',
        'PROJECT_VEHICULOS_TITLE',
        'PROJECT_VEHICULOS_DESC',
        'PROJECT_PRODUCTORES_TITLE',
        'PROJECT_PRODUCTORES_DESC',
      ])
      .subscribe((translations) => {
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
            url: 'assets/siafev.jpg',
            button: false,
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
            url: 'assets/sicov.jpg',
            button: false,
          },
          {
            title: translations['PROJECT_VEHICULOS_TITLE'],
            description: translations['PROJECT_VEHICULOS_DESC'],
            technologies: ['React', 'Spring', 'PostgreSQL'],
            technologiesImg: [
              'assets/icons/angular.svg',
              'assets/icons/java.svg',
              'assets/icons/postgresql.svg',
            ],
            url: 'assets/vehiculos.jpg',
            button: false,
          },
          {
            title: translations['PROJECT_PRODUCTORES_TITLE'],
            description: translations['PROJECT_PRODUCTORES_DESC'],
            technologies: ['React', 'Spring', 'PostgreSQL'],
            technologiesImg: [
              'assets/icons/angular.svg',
              'assets/icons/java.svg',
              'assets/icons/postgresql.svg',
            ],
            url: 'assets/productores.jpg',
            button: false,
          },
          {
            title: translations['PROJECT_RESTAURANT_TITLE'],
            description: translations['PROJECT_RESTAURANT_DESC'],
            technologies: ['React'],
            technologiesImg: ['assets/icons/react.svg'],
            url: 'assets/restaurante.jpg',
            button: true,
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

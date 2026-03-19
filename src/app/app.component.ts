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

  loading = true;

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
      (AOS.default ?? AOS).init();
    }

    this.translate.use(this.translate.getDefaultLang()).subscribe(() => {
      this.updateTranslations();
      this.loading = false;
    });
  }

  // Método para actualizar las traducciones
  private updateTranslations() {
    this.translate
      .get([
        'SAMA',
        'SAMA_DESC',
        'SAMA_INI',
        'SAMA_FIN',
        'SEFIPLAN',
        'PROGRAMMER',
        'SEFIPLAN_DESC',
        'SEFIPLAN_FIN',
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
        'PROJECT_SMERA_TITLE',
        'PROJECT_SMERA_DESC',
        'PROJECT_PDF_TOOLS_TITLE',
        'PROJECT_PDF_TOOLS_DESC',
        'PROJECT_TOURIFY_TITLE',
        'PROJECT_TOURIFY_DESC',
        'PROJECT_LOCKLY_TITLE',
        'PROJECT_LOCKLY_DESC',
        'PROJECT_CONSULTORIA_TITLE',
        'PROJECT_CONSULTORIA_DESC',
        'PROJECT_POS_TITLE',
        'PROJECT_POS_DESC',
      ])
      .subscribe((translations) => {
        this.experiencias = [
          {
            compania: translations['SAMA'],
            titulo: translations['PROGRAMMER'],
            descripcion: translations['SAMA_DESC'],
            inicio: translations['SAMA_INI'],
            fin: translations['SAMA_FIN'],
            icono: 'code',
          },
          {
            compania: translations['SEFIPLAN'],
            titulo: translations['PROGRAMMER'],
            descripcion: translations['SEFIPLAN_DESC'],
            inicio: translations['JUNE'],
            fin: translations['SEFIPLAN_FIN'],
            icono: 'code',
          },
          {
            compania: translations['HOSPITAL_ANGELES'],
            titulo: translations['SYSTEM_OPERATOR'],
            descripcion: translations['HOSPITAL_DESC'],
            inicio: translations['OCTOBER'],
            fin: translations['JUNE'],
            icono: 'dns',
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
          {
            title: translations['PROJECT_SMERA_TITLE'],
            description: translations['PROJECT_SMERA_DESC'],
            technologies: ['NextJS', 'Node.js', 'Appwrite'],
            technologiesImg: [
              'assets/icons/nextjs.svg',
              'assets/icons/nodedotjs.svg',
              'assets/icons/appwrite.svg',
            ],
            url: 'assets/smera.jpg',
            button: false,
          },
          {
            title: translations['PROJECT_PDF_TOOLS_TITLE'],
            description: translations['PROJECT_PDF_TOOLS_DESC'],
            technologies: ['NextJS', 'Node.js', 'python'],
            technologiesImg: [
              'assets/icons/nextjs.svg',
              'assets/icons/nodedotjs.svg',
              'assets/icons/python.svg',
            ],
            url: 'assets/pdf_tools.jpg',
            button: false,
          },
          {
            title: translations['PROJECT_TOURIFY_TITLE'],
            description: translations['PROJECT_TOURIFY_DESC'],
            technologies: ['NextJS', 'Node.js', 'Supabase'],
            technologiesImg: [
              'assets/icons/nextjs.svg',
              'assets/icons/nodedotjs.svg',
              'assets/icons/supabase.svg',
            ],
            url: 'assets/tourify.jpg',
            button: false,
          },
          {
            title: translations['PROJECT_LOCKLY_TITLE'],
            description: translations['PROJECT_LOCKLY_DESC'],
            technologies: ['NextJS', 'Node.js', 'Supabase'],
            technologiesImg: [
              'assets/icons/nextjs.svg',
              'assets/icons/nodedotjs.svg',
              'assets/icons/supabase.svg',
            ],
            url: 'assets/lockly.jpg',
            button: false,
          },
          {
            title: translations['PROJECT_CONSULTORIA_TITLE'],
            description: translations['PROJECT_CONSULTORIA_DESC'],
            technologies: ['NextJS', 'Node.js'],
            technologiesImg: [
              'assets/icons/nextjs.svg',
              'assets/icons/nodedotjs.svg',
            ],
            url: 'assets/consultoria.jpg',
            button: false,
          },
          {
            title: translations['PROJECT_POS_TITLE'],
            description: translations['PROJECT_POS_DESC'],
            technologies: ['NextJS', 'Node.js', 'Spring'],
            technologiesImg: [
              'assets/icons/nextjs.svg',
              'assets/icons/nodedotjs.svg',
              'assets/icons/spring.svg',
            ],
            url: 'assets/pos.jpg',
            button: false,
          }
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

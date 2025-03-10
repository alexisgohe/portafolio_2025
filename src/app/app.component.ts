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
  }

  ngOnInit() {
    this.experiencias = [
      {
        compania: 'SEFIPLAN XALAPA',
        titulo: 'Programador',
        descripcion:
          'Actualmente estoy involucrado en el desarrollo de una aplicación financiera.',
        inicio: 'Junio 2023',
        fin: 'Actualidad',
        icono: 'dns',
      },
      {
        compania: 'Hospital Angeles',
        titulo: 'Operador en sistemas',
        descripcion: 'Me encargue del Soporte Técnico.',
        inicio: 'Octubre 2019',
        fin: 'Junio 2023',
        icono: 'code',
      },
    ];
    this.proyectos = [
      {
        title: 'Sistema de Gestión Financiera (SIAFEV)',
        description:
          'Desarrollé módulos del eje patrimonial en un sistema financiero, integrando APIs, webSocket y gestionando versiones con Git.',
        technologies: ['Angular', 'Java EE', 'PostgreSQL'],
        technologiesImg: [
          'assets/icons/angular.svg',
          'assets/icons/java.svg',
          'assets/icons/postgresql.svg',
        ],
        url: 'assets/proyectos.jpg',
      },
      {
        title: 'Sistema de Control Vehicular',
        description: 'Implemento mejoras en un sistema de gestión vehicular.',
        technologies: ['React', 'Spring', 'PostgreSQL'],
        technologiesImg: [
          'assets/icons/react.svg',
          'assets/icons/spring.svg',
          'assets/icons/postgresql.svg',
        ],
        url: 'assets/proyectos1.jpg',
      },
      {
        title: 'Landing Page Restaurante',
        description:
          'Desarrollé una página estática accesible para un restaurante ficticio, enfocándome en usabilidad e inclusión.',
        technologies: ['React'],
        technologiesImg: ['assets/icons/react.svg'],
        url: 'assets/proyectos1.jpg',
      },
    ];
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

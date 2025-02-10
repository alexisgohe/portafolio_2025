import { mergeApplicationConfig, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    importProvidersFrom(FontAwesomeModule)
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { PinPageComponent } from './pin-page/pin-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { GreetingPageComponent } from './greeting-page/greeting-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

import { Routes } from '@angular/router';
import { PinPageComponent } from './pin-page/pin-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { GreetingPageComponent } from './greeting-page/greeting-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';

export const routes: Routes = [
  { path: '', component: PinPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'game', component: GamePageComponent },
  { path: 'greeting', component: GreetingPageComponent },
  { path: 'gallery', component: GalleryPageComponent },
];

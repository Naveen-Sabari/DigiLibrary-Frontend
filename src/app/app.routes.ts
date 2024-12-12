import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { CheckoutComponent } from './features/examples/checkout/checkout.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { HeaderComponent } from '../app/features/examples/header/header.component';
import { SignupComponent } from './signup-user/signup-user.component';
import { AboutComponent } from './features/examples/about/about.component';
import { ContactComponent } from './features/examples/contact/contact.component';
import { GymComponent } from './features/examples/gym/gym.component';
import { SucessComponent } from './features/examples/sucess/sucess.component';
import { CancelComponent } from './features/examples/cancel/cancel.component';
import { ReceipeComponent } from './features/examples/receipe/receipe.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gym', component: GymComponent },
  { path: 'about', component: AboutComponent },
  { path: 'receipe', component: ReceipeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'success', component: SucessComponent },
  { path: 'cancel', component: CancelComponent },
  {
    path: 'library-angular',
    loadChildren: () => import('./features/library-angular/library-angular.module')
      .then(mod => mod.LibraryAngularModule),
  },
  { path: 'checkout', component: CheckoutComponent },
  {
    path: 'trailer',
    loadChildren: () => import('./features/examples/Trailer/trailer.module')
      .then(mod => mod.NewsModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./features/examples/news/news.module')
      .then(mod => mod.NewsModule)
  },
  { path: 'login', component: LoginUserComponent },
  {
    path: 'noval',
    loadChildren: () => import('./features/examples/novel/novel.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'music',
    loadChildren: () => import('./features/examples/music/music.module')
      .then(mod => mod.TutorialModule)
  },
  { path: '', component: SignupComponent },
  { path: 'header', component: HeaderComponent },
  { path: '**', component: NotFoundComponent }
];

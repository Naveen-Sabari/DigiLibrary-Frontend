import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { environment } from '../../../environments/environment';
import { HeaderComponent } from '../examples/header/header.component';
import { FooterComponent } from '../footer/footer.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  items = [
    {
      icon: "fa-solid fa-newspaper",
      name: "News",
      description: " Get Latest news and updates",
      link: '/news'
    },
    {
      icon: "fa-brands fa-readme",
      name: "Novels",
      description: "Discover new and popular novels",
      link: '/noval'
    },
    {
      icon: "fa-solid fa-book",
      name: "Library",
      description: "Explore a wide collection of books",
      link: '/library-angular'
    },
    {
      icon: "fa-solid fa-film",
      name: "Movies Buzz",
      description: "Stay updated with the latest movie trailers ",
      link: '/trailer'
    },
    {
      icon: "fa-solid fa-music",
      name: "Music",
      description: "Listen to your favorite music and explore new tunes",
      link: '/music'
    },
    {
      icon: "fas fa-dumbbell",
      name: "Gym",
      description: "Get fit with our gym workouts and fitness guides",
      link: '/gym'
    },
    {
      icon: "fa-solid fa-utensils",
      name: "Cooking Recipes",
      description: "Explore delicious and easy-to-follow cooking recipes",
      link: '/receipe'
    }
  ];
  



}

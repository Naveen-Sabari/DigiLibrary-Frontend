import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Digi Library';
  isLoggedIn: boolean = false;
  username: string | null = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initializeAuthState();
  }

  initializeAuthState() {
    this.isLoggedIn = localStorage.getItem('authToken') !== null;
    this.username = localStorage.getItem('username') || '';

    if (this.isLoggedIn && !this.username) {
      this.username = 'unidentified';
    }

    this.cdr.detectChanges();
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');

    this.username = '';
    this.isLoggedIn = false;

    this.cdr.detectChanges();
  }

  login() {
    const username = 'theUsername';
    const authToken = 'yourAuthToken';

    localStorage.setItem('authToken', authToken);
    localStorage.setItem('username', username);

    this.username = username;
    this.isLoggedIn = true;

    this.cdr.detectChanges();
  }
  isClicked: boolean = false; 
  showWelcomeMessage() {
    // Show the message when clicked
    this.isClicked = true;

    // Hide the message after 2 seconds (or any duration you prefer)
    setTimeout(() => {
      this.isClicked = false;
    }, 2000); // Hides the message after 2 seconds
  }
}

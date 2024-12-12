import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { AuthService } from './features/examples/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://digilibrary-backend.onrender.com/api/v1';  

  constructor(private http: HttpClient) {}


  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

 
  signup(user: { username: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('authToken') !== null;
  }

  storeAuthData(token: string, username: string): void {
    localStorage.setItem('authToken', token);
    localStorage.setItem('username', username);
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
  }
}

import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private isLoggedIn = false;
  private users: User[] = [
    { email: 'tehila@gmail.com', password: '12345' },
    { email: 'meir@gmail.com', password: '54321' },
  ];
  constructor(private router: Router) {}

  login(username: string, password: string): void {
    const isValid = this.users.some(user => user.email === username && user.password === password);
    if (isValid) {
      this.isLoggedIn = true;
      this.router.navigate(['/gallery']);
    } else {
    }
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}

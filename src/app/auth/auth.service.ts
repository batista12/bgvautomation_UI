import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn:boolean = false;
  isAdmin = null;
  constructor() { }
  
  isAuthenticated() {
    if (sessionStorage['userLoggedIn'] == "true") {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    } 
    return this.isLoggedIn;
  }
}

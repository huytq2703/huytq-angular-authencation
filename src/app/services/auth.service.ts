import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // TODO: validate username & password
  authenticate(username: string, password: string): string {
    if (username && password) {
      return username !== 'admin' ? "The username must be 'admin'" :
              password !== 'admin123' ? "The password must be 'admin123'" : ""
    }

    return "";
  }
}

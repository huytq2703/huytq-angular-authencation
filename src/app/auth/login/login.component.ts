import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  username: string = "";
  password: string = "";
  error: boolean = false;
  message: string = "";

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    const errorMessage = this.authService.authenticate(this.username, this.password);

    if (errorMessage) {
      this.error = true;
      this.message = errorMessage
    } else {
      this.error = false;
      this.router.navigate(['/admin']);
    }
  }
}

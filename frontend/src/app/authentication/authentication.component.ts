import { Component } from '@angular/core';
import { AuthService } from './authentication.component.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  username: string = '';
  password: string = '';

  constructor(private authService : AuthService,
    private router: Router){}

  onLogin(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        if (response === 'Login successful.') {
          console.log('Connexion réussie', response);
          this.router.navigate(['admin', { username: this.username }])
          return;
        }
      },
      (error) => {
        console.error('Erreur de connexion', error);
      }
    );
  }
}

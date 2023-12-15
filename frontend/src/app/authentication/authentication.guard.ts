import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./authentication.component.service";

@Injectable({
    providedIn: 'root',
  })

  export class AuthGuard implements CanActivate {
    constructor(private authService : AuthService , private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): boolean {
        if (this.authService.isAuthenticatedFunction()) {
          return true;
        } else {
          // Rediriger vers la page de connexion si non authentifié
          this.router.navigate(['/login']);
          return false;
        }
      }


  }    
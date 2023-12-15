import { Component, OnInit } from '@angular/core';
import { PortailAdminService } from './portail-admin.component.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portail-admin',
  templateUrl: './portail-admin.component.html',
  styleUrls: ['./portail-admin.component.css']
})
export class PortailAdminComponent implements OnInit {
  newPassword: string = '';
  confirmPassword: string = '';
  newSlogan: string = '';
  username: string | undefined;

  constructor(private portailAdminService: PortailAdminService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    const usernameParam = this.route.snapshot.paramMap.get('username');
    this.username = usernameParam !== null ? usernameParam : undefined;
  }

  confirmPasswordChange() {
    if (this.newPassword === this.confirmPassword) {
      const isConfirmed = confirm("Êtes-vous sûr de vouloir modifier votre mot de passe ?");
      if (isConfirmed && this.username != undefined) {
        this.portailAdminService.updatePassword(this.username, this.newPassword).subscribe(
          (response: HttpResponse<any>) => {
            if (response.status === 200) {
              console.log("Mot de passe modifié avec succès.");
            }
            else{
              console.log("Problème lors de la modification du mot de passe" + response.status);
            }
            (error: HttpErrorResponse) => {
              console.log("Erreur lors de la modification du mot de passe : " + error);
            }
          }
        )
      }
    } else {
      alert("Les mots de passe ne correspondent pas.");
    }
  }

  confirmSloganChange() {
    const isConfirmed = confirm("Êtes-vous sûr de vouloir modifier le slogan ?");
    if (isConfirmed) {
      this.portailAdminService.updateSlogan(this.newSlogan).subscribe(
        (response: HttpResponse<any>) => {
          if (response.status === 200) {
            console.log("Slogan modifié avec succès.");
          }
          else{
            console.log("Problème lors de la modification du slogan");
          }
          (error: HttpErrorResponse) => {
            console.log("Erreur lors de la modification du slogan : " + error);
          }
        }
      )
    }
  }

}

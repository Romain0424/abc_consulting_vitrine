import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.component.service';
import { catchError, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slogan: any;
  constructor(private homeService: HomeService){}

  ngOnInit(): void {
    this.getSlogan();
    
  }

  getSlogan(){
    this.homeService.getSlogan()
      .subscribe(
        response => {
          this.slogan = response;
        },
        (error: HttpErrorResponse) => {
          console.error('Une erreur s\'est produite lors de la récupération du slogan', error);
        }
      );
  }
}

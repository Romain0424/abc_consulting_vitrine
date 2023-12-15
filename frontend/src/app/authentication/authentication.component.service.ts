import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpResponse } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
  })
  export class AuthService {
    private baseUrl = 'http://localhost:8080';
    private isAuthenticated = false;
  
    constructor(private http: HttpClient) {}
  
    login(username: string, password: string): Observable<any> {
      const loginData = { username, password };
      this.isAuthenticated = true;
      return this.http.post(`${this.baseUrl}/login`, loginData, {responseType: 'text' });
    }

    isAuthenticatedFunction(): boolean {
      return this.isAuthenticated;
    }
  }
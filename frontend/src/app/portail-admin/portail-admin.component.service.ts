import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
  })

  export class PortailAdminService {

    private baseUrl = 'http://localhost:8080';
    constructor(private http: HttpClient) {}

    updateSlogan(newSlogan: string): Observable<HttpResponse<any>> {
        return this.http.post(`${this.baseUrl}/updateslogan`, {"slogan" : newSlogan},{ observe: 'response' });
    }

    updatePassword(username: string, newPassword: string): Observable<any> {
        return this.http.post(`${this.baseUrl}/updatepassword`, {username: username, password: newPassword}, { observe: 'response' });
    }
}
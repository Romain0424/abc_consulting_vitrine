import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
  })

  export class HomeService {

    private baseUrl = 'http://localhost:8080';
    constructor(private http: HttpClient) {}

    getSlogan(): Observable<string> {
        return this.http.get(`${this.baseUrl}/getslogan`, { responseType: 'text' });
    }

}
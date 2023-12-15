import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FormsModule } from '@angular/forms';
import { PortailAdminComponent } from './portail-admin/portail-admin.component';
import { AuthService } from './authentication/authentication.component.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeService } from './home/home.component.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticationComponent,
    PortailAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,
    HttpClient,
    HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PortailAdminComponent } from './portail-admin/portail-admin.component';
import { AuthGuard } from './authentication/authentication.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: AuthenticationComponent },
  { path: 'admin', component: PortailAdminComponent, canActivate: [AuthGuard], }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

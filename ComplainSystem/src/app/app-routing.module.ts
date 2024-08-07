import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './SharedComponent/login/login.component';
import { RegistrationComponent } from './SharedComponent/registration/registration.component';
import { UserDashboardComponent } from './Component/user-dashboard/user-dashboard.component';
import { AuthGuard } from './Core/Guards/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: RegistrationComponent},
  {path: 'user-dashboard', component: UserDashboardComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

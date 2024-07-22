import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './Modules/User/user.module';
import { AdminModule } from './Modules/Admin/admin.module';
import { LoginComponent } from './SharedComponent/login/login.component';
import { HeaderComponent } from './SharedComponent/header/header.component';
import { FooterComponent } from './SharedComponent/footer/footer.component';
import { NavbarComponent } from './SharedComponent/navbar/navbar.component';
import { AdminDashboardComponent } from './Component/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './Component/user-dashboard/user-dashboard.component';
import { RegistrationComponent } from './SharedComponent/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './Component/user-profile/user-profile.component';
import { AdminProfileComponent } from './Component/admin-profile/admin-profile.component';
import { TokenInterceptor } from './Core/Interceptor/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    RegistrationComponent,
    UserProfileComponent,
    AdminProfileComponent


  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule, AdminModule, UserModule, HttpClientModule, ReactiveFormsModule, ToastModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
  }, { provide: MessageService }],
  bootstrap: [AppComponent]
})
export class AppModule { }

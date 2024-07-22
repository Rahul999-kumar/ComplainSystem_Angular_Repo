import { Injectable } from '@angular/core';
import { NewUserRegistration } from '../Core/Classes/new-user-registration';
import { DataService } from './data.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userPayload: any;
  UserRegistration: any = NewUserRegistration;
  controllerName: string = "User";
  constructor(private _data: DataService) {
    this.userPayload= this.decodeToken();
  }

  GetAll() {
    return this._data.GetAll(this.controllerName);
  }

  //This Method is used to register new user into the system
  RegisterNewUser = (UserRegistration: any) => {
    return this._data.Create('User/NewUser', UserRegistration);
  }

  Login = (userData: any) => {
    return this._data.Create('UserLogin/Authenicate', userData);
  }

  Logout() {
    localStorage.removeItem('token');
    localStorage.clear();
  }

  storeToken = (tokenValue: string) => {
    localStorage.setItem('token', JSON.parse(tokenValue).token);
  }

  getToken = () => {
    return localStorage.getItem('token');
  }

  isLoggedIn = (): boolean => {
    return !!localStorage.getItem('token');
  }

  decodeToken = () => {
    debugger;
    const jwtHelper = new JwtHelperService();
    var token = this.getToken();
    if (token) {
      return jwtHelper.decodeToken(token);
    }
  }

  GetDecodedUserNameFromToken = () =>{
    if(this.userPayload){
     return this.userPayload.name;
    }
  }

  GetDecodedRegistrationIdFromToken = () =>{
    if(this.userPayload){
      return this.userPayload.certserialnumber;
    }
  }

  GetDecodedRoleFromToken = () =>{
    if(this.userPayload){
    return  this.userPayload.role;
    }
  }
}

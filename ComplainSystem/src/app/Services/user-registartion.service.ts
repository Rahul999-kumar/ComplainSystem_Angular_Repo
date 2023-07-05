import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { NewUserRegistration } from '../Core/Classes/new-user-registration';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistartionService {

  UserRegistration: any = NewUserRegistration;
  controllerName: string = "User";
  constructor(private _data: DataService) { }

  GetAll() {
    return this._data.GetAll(this.controllerName);
  }

  //This Method is used to register new user into the system
  RegisterNewUser = (UserRegistration: any) => {
    return this._data.Create('User/NewUser', UserRegistration);
  }

  Login = (userData: any) => {
    return this._data.Create('UserLogin/Authenicate',userData);
  }


}

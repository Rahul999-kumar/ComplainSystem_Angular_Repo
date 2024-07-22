import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private userName$ = new BehaviorSubject<string>("");
  private userRole$ =new BehaviorSubject<string>("");
  constructor() { }


  public SetRoles = (roles: string) => {
    this.userRole$.next(roles);
  }

  public GetRoles = () =>{
    return this.userRole$.asObservable();
  }

  public SetUsername = (username: string) => {
    this.userName$.next(username);
  }

  public GetUsername = () =>{
   return this.userName$.asObservable();
  }
}

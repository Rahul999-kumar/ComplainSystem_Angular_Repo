import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, pipe } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { NewUserRegistration } from '../Core/Classes/new-user-registration';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  env: string = environment.serviceBaseUrl;

  httpOptions = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }



  constructor(private _http: HttpClient) { }

  //This method is used to get all data
  GetAll(endPoint: string) {
    return this._http.get(this.env + `${endPoint}`);
  }

  //This method is used to get the data bye Id
  GetByID(endPoint: string, param: any) {
    return this._http.get(this.env + `${endPoint}/${param}`)
  }

  //This method is used to create object into system.
  Create(endPoint: string, data: any): Observable<Object> {
    return this._http.post(this.env + endPoint, data).pipe(
      map((NewUserRegistration: any) => {
        if (NewUserRegistration) {
          console.log('Yes');
        }
        return NewUserRegistration;
      })
    );
  }

  //This method is used to update the data
  Update(endPoint: string, data: any): Observable<Object> {
    return this._http.put(this.env + endPoint, data).pipe(
      map((NewUserRegistration: any) => {
        if (NewUserRegistration) {
          console.log('Yes');
        }
        return NewUserRegistration;
      })
    );
  }

  //This method is used to delete data
  Delete(endPoint: string, param: any) {
    return this._http.delete(this.env + `${endPoint}/${param}`);
  }
}

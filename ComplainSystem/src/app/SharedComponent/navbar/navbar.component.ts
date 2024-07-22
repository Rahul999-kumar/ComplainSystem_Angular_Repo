import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { UserDataService } from 'src/app/Services/user-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public userName: any;
  constructor(private _authService: AuthService, private _router: Router, private _userData: UserDataService) { }

  ngOnInit() {
    this._userData.GetUsername().subscribe(res => {       
        let userFullName = this._authService.GetDecodedUserNameFromToken();
        this.userName = res || userFullName;
    })
  }

  Logout() {
    this._authService.Logout();
    this._router.navigate(['']);

  }

}

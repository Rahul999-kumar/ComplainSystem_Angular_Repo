import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { UserDataService } from 'src/app/Services/user-data.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  public userName: any;
  constructor(private route : ActivatedRoute, private _authService: AuthService, private _router: Router, private _userData: UserDataService){

  }

  ngOnInit(){

    debugger;
    const routId= this.route.snapshot.paramMap.get('userID');


  }

}

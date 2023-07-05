import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegistartionService } from 'src/app/Services/user-registartion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _fb: FormBuilder, private _router: Router, private _userReg: UserRegistartionService) {

  }

  UserLoginForm = this._fb.group({
    UserRegistrationId: [0],
    Username: ['', [Validators.required]],
    Password: ['', [Validators.required]]
  })

  Login() {
    debugger;
    console.log(this.UserLoginForm);
    this._userReg.Login(this.UserLoginForm.value).subscribe(x => {
      this._router.navigate(["/user-dashboard"]);
    })
  }

}

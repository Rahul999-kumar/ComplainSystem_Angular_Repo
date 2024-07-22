import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _fb: FormBuilder, private _router: Router, private _authService: AuthService) {

  }

  UserLoginForm = this._fb.group({
    UserRegistrationId: [0],
    Username: ['', [Validators.required]],
    Password: ['', [Validators.required]]
  })

  Login() {
    this._authService.Login(this.UserLoginForm.value).subscribe(res => {
      console.log(res,'Res');
      this._authService.storeToken(JSON.stringify(res));
      this._router.navigate(["/user-dashboard"]);
    })
  }

}

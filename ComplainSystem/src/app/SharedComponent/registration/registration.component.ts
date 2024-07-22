import { Component } from '@angular/core';
import { UserRegistartionService } from '../../Services/user-registartion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  UserRegistrationForm: any;
  resultData: any = [];
  public passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/;
  constructor(private _userReg: UserRegistartionService, private _fb: FormBuilder, private _router: Router) {

  }

  ngOnInit() {
    this.UserRegistrationForm = this._fb.group({
      UserID: [0],
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
      ConfirmPassword: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
      Token: [null]
    })


    // this.UserRegistrationForm = this._fb.group({
    //   UserID: [0],
    //   Username: ['', [Validators.required]],
    //   Password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
    //   ConfirmPassword: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
    //   Token: [null]
    // }, { Validators: this.checkingPasswords })
  }


  CreateUser = () => {
    debugger;
    if (this.UserRegistrationForm.valid) {

      this._userReg.RegisterNewUser(this.UserRegistrationForm.value).subscribe({
        next: (result) => {
          this.resultData = result;
          if (this.resultData.username != 'exists' && this.resultData.userID != 0) {
            alert('Added Successfully!');
            this.UserRegistrationForm.reset();
            this._router.navigate(['']);

          } else if (this.resultData.username == 'exists') {
            alert('this username is already exists.');
          } else {

          }
        }
      });
    } else {
      alert('soething is wrong! please try later');
    }
  }

  checkingPasswords = () => {
    if (
      this.UserRegistrationForm['Password'].value &&
      this.UserRegistrationForm['ConfirmPassword'].value &&
      // this.UserRegistrationForm['Password'].value &&
      this.UserRegistrationForm['Password'].value.length >= 8 &&
      this.UserRegistrationForm['Password'].value.length <= 16 &&
      this.UserRegistrationForm['ConfirmPassword'].value.length >= 8 &&
      this.UserRegistrationForm['ConfirmPassword'].value.length <= 16
    ) {
      return this.UserRegistrationForm.Password.value === this.UserRegistrationForm.ConfirmPassword.value ? false : { "notMatched": true }
    }
    return false;
  };

}

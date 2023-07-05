import { Component } from '@angular/core';
import { UserRegistartionService } from '../../Services/user-registartion.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private _userReg: UserRegistartionService, private _fb: FormBuilder, private  _router: Router) {

  }

  UserregistrationForm = this._fb.group({
    UserRegistrationId: [0],
    FirstName: ['', [Validators.required]],
    Lastname: ['', [Validators.required]],
    Email: ['', [Validators.required]],
    MobileNo: [null],
    Username: [''],
    Password: ['', [Validators.required]],
    Token: [null]
  })

  // GetAll() {
  //   console.log('coming too');
  //   this._userReg.GetAll().subscribe(data => {
  //     console.log(data);
  //     console.log('jjjj');
  //   });
  // }

  CreateUser() {
    debugger;
    if (this.UserregistrationForm.valid) {
      this.UserregistrationForm.patchValue({ Username: this.UserregistrationForm.value.Email });
      this._userReg.RegisterNewUser(this.UserregistrationForm.value).subscribe(result => {
        console.log(result);
        alert('Added Successfully!');
        this._router.navigate(['/user-dashboard']);
      });
    }
  }

}

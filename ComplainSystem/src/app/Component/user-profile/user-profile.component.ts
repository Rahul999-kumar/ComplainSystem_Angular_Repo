import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { DataService } from 'src/app/Services/data.service';
import { UserDataService } from 'src/app/Services/user-data.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  public userName: any;
  public RegID: any;
  userProfileData: any = [];
  constructor(private _fb: FormBuilder, private _router: Router, private _authService: AuthService, private _userData: UserDataService,
    private _dataService: DataService, private _route: ActivatedRoute, private _messageService: MessageService
  ) {
    const routId = this._route.snapshot.paramMap.get('id');
  }

  UserProfileForm = this._fb.group({
    UserProfileId: [0],
    UserID: [0],
    FirstName: ['', [Validators.required]],
    LastName: ['', [Validators.required]],
    Username: ['', [Validators.required]],
    Mobile: ['', [Validators.required]],
    AlternateMobile: [''],
    DOB: [null],
    GenderID: [1]
  })

  ngOnInit() {
    this.GetUsername();
    this.GetUserProfile(this.RegID);
  }

  GetUsername = () => {
    this._userData.GetUsername().subscribe(res => {
      debugger;
      this.userName = this._authService.GetDecodedUserNameFromToken();
      this.RegID = this._authService.GetDecodedRegistrationIdFromToken();
      this.UserProfileForm.controls.Username.setValue(this.userName);
      this.UserProfileForm.controls.UserID.setValue(this.RegID);
    })
  }

  UpdateProfile = () => {
    if (this.UserProfileForm.controls.UserID.value != 0) {
      debugger;
      this._dataService.Update("UserProfile/UpdateUserProfile", this.UserProfileForm.value).subscribe(result => {
        console.log(result, 'checking result');
        if (result != null) {
          console.log(result, 'final result');
          this.showToast1();
        }
        // alert('Profile is updated');
       
      });
    }
  }

  GetUserProfile = (userID: Int32Array) => {
    this._dataService.GetByID("UserProfile/GetUserProfileByID", userID).subscribe(result => {
      if (result != null) {
        this.userProfileData = result;
        console.log(this.userProfileData, 'userprofiledata');
        this.UserProfileForm.patchValue({
          UserProfileId: this.userProfileData.userProfileId,
          UserID: this.userProfileData.userID,
          FirstName: this.userProfileData.firstName,
          LastName: this.userProfileData.lastName,
          Mobile: this.userProfileData.mobile,
          AlternateMobile: this.userProfileData.alternateMobile,
          GenderID: this.userProfileData.genderID,
          DOB: this.userProfileData.dob
        });
      }
    });
  }

  showToast1() {
    this._messageService.clear();
    this._messageService.add({ key: 'k1', severity: 'success', summary: 'Success', detail: 'Profile Updated successfully!' });
}
}

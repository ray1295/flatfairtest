import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { loginData } from '../login/login.component';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from "../services/authentication.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  // styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  
  hide = true;
  loginForm: FormGroup;

  constructor(private route: Router, 
    private auth: AuthenticationService, 
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<LoginModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: loginData) {
      this.loginForm = new FormGroup({
        email: new FormControl('', 
        Validators.compose(
          [ Validators.required, 
            Validators.email
          ])),
        password: new FormControl('', 
        Validators.required),
      })
    }

    onCloseCancel(): void {
      this.dialogRef.close();
    }

    onSubmitLogin() {
      this.auth.loginUser().subscribe(
        (response) => {
          for (let i = 0; i < response["user"].length; i++ ) {
            if( this.loginForm.value.email === response["user"][i].email ) {
              this.route.navigate(["/home"]);
              this.dialogRef.close();
            }
          }
        } 
      ) 
    }

  ngOnInit() {}

}

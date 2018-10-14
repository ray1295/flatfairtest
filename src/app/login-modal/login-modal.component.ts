import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { loginData } from '../login/login.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  // styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  
  hide = true;
  username = new FormControl('');
  
  constructor(
    public dialogRef: MatDialogRef<LoginModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: loginData) {}

    onCloseCancel(): void {
      this.dialogRef.close();
    }

    onCloseConfirm(): void {
      
    }


  ngOnInit() {
  }

}

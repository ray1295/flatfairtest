import { FormControl, FormGroup, NgForm, FormGroupDirective } from '@angular/forms';


export class PasswordValidator {
  static checkPasswords(group: FormGroup) {
    let password = group.controls.password.value;
    let confirmPassword = group.controls.confirmPassword.value;

    return password === confirmPassword  ? null : { notSame: true }
  }
}
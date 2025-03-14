import {Component, inject} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { confirmPasswordValidator } from '../../utils/confirm-password.validator';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  standalone: false,
  styleUrl: './password.component.scss'
})
export class PasswordComponent {

  private _snackBar = inject(MatSnackBar);

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  changePasswordForm = new FormGroup({
    currentlyPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    newPassword: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d\s]).{8,}$/)]),
    confirmationPassword: new FormControl('', [Validators.required, Validators.minLength(8), confirmPasswordValidator]),
  });

  constructor(private dialogRef: MatDialogRef<PasswordComponent>) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close();
    this.openSnackBar('Tu contraseña se ha cambiado correctamente');
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'x', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }


}

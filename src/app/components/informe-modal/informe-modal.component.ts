import {Component, inject} from '@angular/core';
import {MatDialogClose, MatDialogContent, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-informe-modal',
  standalone: true,
  templateUrl: './informe-modal.component.html',
  imports: [
    MatDialogContent,
    MatRadioGroup,
    FormsModule,
    MatRadioButton,
    MatDialogClose,
    MatButton
  ],
  styleUrl: './informe-modal.component.scss'
})
export class InformeModalComponent {

  private _snackBar = inject(MatSnackBar);

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private dialogRef: MatDialogRef<InformeModalComponent>) {}

  onSubmit(): void {
    this.dialogRef.close();
    this.openSnackBar('Tu informe ha sido generado correctamente');
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'x', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}

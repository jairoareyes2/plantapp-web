import {Component, inject} from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {MatDialogClose, MatDialogContent, MatDialogRef} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-eliminar-cuenta',
  standalone: true,
  templateUrl: './eliminar-cuenta.component.html',
  imports: [
    MatDialogContent,
    MatButton,
    MatDialogClose
  ],
  styleUrl: './eliminar-cuenta.component.scss'
})
export class EliminarCuentaComponent {
  private _snackBar = inject(MatSnackBar);
  private _router = inject(Router)

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private dialogRef: MatDialogRef<EliminarCuentaComponent>) {}

  eliminarCuenta(): void {
    this.dialogRef.close();
    this.openSnackBar('Tu cuenta ha sido eliminada');
    this._router.navigate(['/login']);
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'x', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 500,
    });
  }

}

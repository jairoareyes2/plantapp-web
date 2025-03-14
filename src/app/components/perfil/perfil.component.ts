import { Component } from '@angular/core';
import {PasswordComponent} from '../password/password.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-perfil',
  standalone: false,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {

  constructor(public dialog: MatDialog) {
  }


  changePassword(): void {
    const dialogRef = this.dialog.open(PasswordComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result ) {

      }
    });
  }

}

import { Component } from '@angular/core';
import {PasswordComponent} from '../password/password.component';
import {MatDialog} from '@angular/material/dialog';
import {EliminarCuentaComponent} from '../eliminar-cuenta/eliminar-cuenta.component';

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
    this.dialog.open(PasswordComponent, {
      width: '450px'
    });
  }

  eliminarCuenta(): void{
    this.dialog.open(EliminarCuentaComponent, {
      width: '450px'
    });
  }

}

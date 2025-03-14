import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

interface Spot {
  name: string;
  type: string;
  capacity: number;
  lightType: string;
  airType: string;
  plantCount: number;
}

@Component({
  selector: 'app-create-spot',
  standalone: false,
  templateUrl: './create-spot.component.html',
  styleUrls: ['./create-spot.component.scss'],
})
export class CreateSpotComponent {
  spot: Spot = {
    name: '',
    type: 'Interior',
    capacity: 0,
    lightType: 'natural',
    airType: 'natural',
    plantCount: 0,
  };

  constructor(private dialogRef: MatDialogRef<CreateSpotComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close(this.spot);
  }
}

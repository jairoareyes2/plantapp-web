import { Component } from '@angular/core';

interface Spot {
  name: string;
  type: string;
  capacity: number;
  lightType: string;
  airType: string;
  plantCount: number;
}

@Component({
  selector: 'app-spots',
  standalone: false,
  templateUrl: './spots.component.html',
  styleUrls: ['./spots.component.scss']
})
export class SpotsComponent {
  spots: Spot[] = [
    { name: 'Patio', type: 'Interior', capacity: 20, lightType: 'natural', airType: 'natural', plantCount: 5 },
    { name: 'Terraza', type: 'Exterior', capacity: 25, lightType: 'natural', airType: 'natural', plantCount: 3 },
    { name: 'Antejardín', type: 'Exterior', capacity: 35, lightType: 'natural', airType: 'natural', plantCount: 4 },
    { name: 'Sala', type: 'Interior', capacity: 10, lightType: 'artificial', airType: 'artificial', plantCount: 2 }
  ];

  selectedSpot: Spot | null = null;

  constructor() {
    // Selecciona el primer elemento por defecto
    if (this.spots.length > 0) {
      this.selectedSpot = this.spots[0];
    }
  }

  selectSpot(spot: Spot): void {
    this.selectedSpot = spot;
  }

  createSpot(): void {
    // Lógica para crear un nuevo espacio
  }
}

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
    { name: 'Terraza', type: 'Interior', capacity: 20, lightType: 'natural', airType: 'natural', plantCount: 3 },
    { name: 'Antejardín', type: 'Interior', capacity: 20, lightType: 'natural', airType: 'natural', plantCount: 4 },
    { name: 'Sala', type: 'Interior', capacity: 20, lightType: 'natural', airType: 'natural', plantCount: 2 }
  ];

  selectedSpot: Spot | null = null;

  selectSpot(spot: Spot): void {
    this.selectedSpot = spot;
  }

  createSpot(): void {
    // Lógica para crear un nuevo espacio
  }
}

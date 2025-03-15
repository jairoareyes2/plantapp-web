import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatButton} from '@angular/material/button';


@Component({
  selector: 'app-informe',
  standalone: true,
  templateUrl: './informe.component.html',
  imports: [MatTableModule, MatPaginatorModule, MatButton],
  styleUrl: './informe.component.scss'
})
export class InformeComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'fecha', 'planta', 'agua', 'nutrientes', 'comentarios'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  id: number;
  fecha: string;
  planta: string;
  agua: string;
  nutrientes: string;
  comentarios: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, fecha: '10/12/2024', planta: 'Begonia', agua: '100 ml', nutrientes: 'Fósforo', comentarios: 'Regar 2 veces a la semana'},
  {id: 2, fecha: '15/01/2025', planta: 'Anturio', agua: '200 ml', nutrientes: 'Potasio', comentarios: 'Regar 1 vez a la semana'},
  {id: 3, fecha: '17/01/2025', planta: 'Romero', agua: '150 ml', nutrientes: 'Zinc', comentarios: 'Regar 2 veces al día'},
  {id: 4, fecha: '18/01/2025', planta: 'Camelia', agua: '100 ml', nutrientes: 'Manganeso', comentarios: 'Cambiar abono'},
  {id: 5, fecha: '20/01/2025', planta: 'Dalia', agua: '120 ml', nutrientes: 'Potasio', comentarios: 'Aplicar fertilizantes'},
  {id: 6, fecha: '02/02/2025', planta: 'Gardenia', agua: '180 ml', nutrientes: 'Fósforo', comentarios: 'Regar 2 veces a la semana'},
  {id: 7, fecha: '04/02/2025', planta: 'Geranio', agua: '100 ml', nutrientes: 'Potasio', comentarios: 'Regar 2 veces a la semana'},
  {id: 8, fecha: '10/02/2025', planta: 'Margarita', agua: '130 ml', nutrientes: 'Hierro', comentarios: 'Regar 2 veces a la semana'},
  {id: 9, fecha: '13/02/2025', planta: 'Jazmín', agua: '250 ml', nutrientes: 'Calcio', comentarios: 'Regar 2 veces a la semana'},
  {id: 10, fecha: '15/02/2025', planta: 'Orquídea', agua: '120 ml', nutrientes: 'Hierro', comentarios: 'Regar 2 veces a la semana'},
  {id: 11, fecha: '16/02/2025', planta: 'Begonia', agua: '100 ml', nutrientes: 'Fósforo', comentarios: 'Regar 2 veces a la semana'},
  {id: 12, fecha: '17/02/2025', planta: 'Anturio', agua: '200 ml', nutrientes: 'Potasio', comentarios: 'Regar 1 vez a la semana'},
  {id: 13, fecha: '19/02/2025', planta: 'Romero', agua: '150 ml', nutrientes: 'Zinc', comentarios: 'Regar 2 veces al día'},
  {id: 14, fecha: '20/02/2025', planta: 'Camelia', agua: '100 ml', nutrientes: 'Manganeso', comentarios: 'Cambiar abono'},
  {id: 15, fecha: '21/02/2025', planta: 'Dalia', agua: '120 ml', nutrientes: 'Potasio', comentarios: 'Aplicar fertilizantes'},
  {id: 16, fecha: '23/02/2025', planta: 'Gardenia', agua: '180 ml', nutrientes: 'Fósforo', comentarios: 'Regar 2 veces a la semana'},
  {id: 17, fecha: '24/02/2025', planta: 'Geranio', agua: '100 ml', nutrientes: 'Potasio', comentarios: 'Regar 2 veces a la semana'},
  {id: 18, fecha: '25/02/2025', planta: 'Margarita', agua: '130 ml', nutrientes: 'Hierro', comentarios: 'Regar 2 veces a la semana'},
  {id: 19, fecha: '27/02/2025', planta: 'Jazmín', agua: '250 ml', nutrientes: 'Calcio', comentarios: 'Regar 2 veces a la semana'},
  {id: 20, fecha: '28/02/2025', planta: 'Orquídea', agua: '120 ml', nutrientes: 'Hierro', comentarios: 'Regar 2 veces a la semana'},
];

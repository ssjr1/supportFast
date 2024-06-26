import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reporte-tecnicos',
  standalone: true,
  imports: [MatTableModule,MatPaginatorModule, DatePipe],
  templateUrl: './reporte-tecnicos.component.html',
  styleUrl: './reporte-tecnicos.component.scss'
})



export class ReporteTecnicosComponent implements AfterViewInit{
  displayedColumns: string[] = ['fechaCreacion','fechaCierre', 'Ticket', 'Estado', 'tecnicoResponsable','categoria','solucion'];
  dataSource = new MatTableDataSource<ReportePorTickets>(ELEMENT_DATA);
 

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  }

  constructor() {
    // Aquí puedes inicializar propiedades o realizar otras tareas necesarias
  }
  

  
}
export interface ReportePorTickets {
  fechaCreacion:Date;
  fechaCierre:Date;
  Ticket: number;
  Estado: string;
  tecnicoResponsable: string;
  categoria: string;
  solucion: string;
 
}


const ELEMENT_DATA: ReportePorTickets[] = [
  {fechaCreacion: new Date(), fechaCierre: new Date(),Ticket : 2856,Estado: 'solucionado',tecnicoResponsable: 'GLOPEZ',categoria: 'redes',solucion:'se cambio router'},
  {fechaCreacion: new Date(), fechaCierre: new Date(),Ticket : 2857,Estado: 'solucionado',tecnicoResponsable: 'GGOMEZ',categoria: 'redes',solucion:'se cambio router'},
  {fechaCreacion: new Date(), fechaCierre: new Date(),Ticket : 2858,Estado: 'solucionado',tecnicoResponsable: 'LPAEZ',categoria: 'redes',solucion:'se cambio router'},
  {fechaCreacion: new Date(), fechaCierre: new Date(),Ticket : 2859,Estado: 'solucionado',tecnicoResponsable: 'LPINCAY',categoria: 'redes',solucion:'se cambio router'},
  {fechaCreacion: new Date(), fechaCierre: new Date(),Ticket : 2860,Estado: 'solucionado',tecnicoResponsable: 'TBAZURTO',categoria: 'HADWARE',solucion:'se cambio router'},
  {fechaCreacion: new Date(), fechaCierre: new Date(),Ticket : 2861,Estado: 'solucionado',tecnicoResponsable: 'EVERA',categoria: 'redes',solucion:'se cambio router'},
  {fechaCreacion: new Date(), fechaCierre: new Date(),Ticket : 2862,Estado: 'solucionado',tecnicoResponsable: 'NPEREZ',categoria: 'SOFTWARE',solucion:'se cambio router'},
  {fechaCreacion: new Date(), fechaCierre: new Date(),Ticket : 2863,Estado: 'solucionado',tecnicoResponsable: 'LAMPUERO',categoria: 'redes',solucion:'se cambio router'},
  {fechaCreacion: new Date(), fechaCierre: new Date(),Ticket : 2864,Estado: 'solucionado',tecnicoResponsable: 'GORTIZ',categoria: 'redes',solucion:'se cambio router'},
  {fechaCreacion: new Date(), fechaCierre: new Date(),Ticket : 2865,Estado: 'solucionado',tecnicoResponsable: 'WSOLIS',categoria: 'SOFTWARE',solucion:'se cambio router'},
  {fechaCreacion: new Date(), fechaCierre: new Date(),Ticket : 2866,Estado: 'solucionado',tecnicoResponsable: 'TZAMBRANO',categoria: 'HARDWARE',solucion:'se cambio router'},
  {fechaCreacion: new Date(), fechaCierre: new Date(),Ticket : 2867,Estado: 'solucionado',tecnicoResponsable: 'YLOZANO',categoria: 'redes',solucion:'se cambio router'},
  
];
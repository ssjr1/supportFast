import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-reporte-tecnicos',
  standalone: true,
  imports: [MatTableModule,MatPaginatorModule],
  templateUrl: './reporte-tecnicos.component.html',
  styleUrl: './reporte-tecnicos.component.scss'
})
export class ReporteTecnicosComponent implements AfterViewInit{
  displayedColumns: string[] = ['IdTicket', 'UsResponsable', 'UsSolicitante', 'Estado'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  IdTicket: number;
  UsResponsable: string;
  UsSolicitante: number;
  Estado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {IdTicket: 1, UsResponsable: 'Hydrogen', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 2, UsResponsable: 'Hbaque', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 3, UsResponsable: 'pdoleen', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 4, UsResponsable: 'Hydrogen', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 5, UsResponsable: 'Hbaque', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 6, UsResponsable: 'pdoleen', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 7, UsResponsable: 'Hydrogen', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 8, UsResponsable: 'Hbaque', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 9, UsResponsable: 'pdoleen', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 10, UsResponsable: 'Hydrogen', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 11, UsResponsable: 'Hbaque', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 12, UsResponsable: 'pdoleen', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 13, UsResponsable: 'Hydrogen', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 14, UsResponsable: 'Hbaque', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 15, UsResponsable: 'pdoleen', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 16, UsResponsable: 'Hydrogen', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 17, UsResponsable: 'Hbaque', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 18, UsResponsable: 'pdoleen', UsSolicitante: 1.0079,  Estado: 'H'},
  
];
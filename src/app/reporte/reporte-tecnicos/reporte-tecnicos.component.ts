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
  {IdTicket: 1, UsResponsable: 'Hbaque', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 1, UsResponsable: 'pdoleen', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 1, UsResponsable: 'Hydrogen', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 3, UsResponsable: 'Hbaque', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 1, UsResponsable: 'pdoleen', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 5, UsResponsable: 'Hydrogen', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 1, UsResponsable: 'Hbaque', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 6, UsResponsable: 'pdoleen', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 1, UsResponsable: 'Hydrogen', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 1, UsResponsable: 'Hbaque', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 1, UsResponsable: 'pdoleen', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 1, UsResponsable: 'Hydrogen', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 3, UsResponsable: 'Hbaque', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 1, UsResponsable: 'pdoleen', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 5, UsResponsable: 'Hydrogen', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 1, UsResponsable: 'Hbaque', UsSolicitante: 1.0079,  Estado: 'H'},
  {IdTicket: 6, UsResponsable: 'pdoleen', UsSolicitante: 1.0079,  Estado: 'H'},
  
];
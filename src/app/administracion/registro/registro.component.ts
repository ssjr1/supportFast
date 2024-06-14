import { Component,  ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule, MatHint} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { DatePipe } from '@angular/common';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    RouterOutlet, ReactiveFormsModule, 
    MatSlideToggleModule, MatCardModule, MatGridListModule, MatFormFieldModule, MatInputModule,
    MatButtonModule,  MatSelectModule, MatDatepickerModule, MatTableModule,
    DatePipe, MatIconModule,  MatSortModule, MatPaginatorModule, MatPaginator, RouterLink, CommonModule 
    
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss' 
})
export class RegistroComponent implements  AfterViewInit{
  title = 'taller-mat';
  minDate: Date;
  maxDate: Date;
  form: FormGroup ;
 
  

  

  displayedColumns: string[] = ['id', 'cedula', 'nombre', 'apellido','fechaNacimiento','genero','correo','direccion','acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  constructor(private fb: FormBuilder,
    private _snackBar: MatSnackBar) {

    
    
  
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);

    this.form = this.fb.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required],

    })

  }
  ngAfterViewInit(): void {
     
  }


  
  agregarPersona(){
    
    

   
    this.mensaje("registrado");
    //this.form.reset();


  }
  filtrar(event: Event) {
    
  }  

  mensaje(texto: string) {
    this._snackBar.open(`La Persona fue ${texto} con exito`, '', {
      duration: 4000,
      horizontalPosition: 'right'
    });
  }

  limpiar(){
    this.form.reset;
  }
  
}

import { Component } from '@angular/core';
import { MenuTablaComponent } from './menu-tabla/menu-tabla.component';

@Component({
  selector: 'app-reporte',
  standalone: true,
  imports: [MenuTablaComponent],
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.scss'
})
export class ReporteComponent {

}

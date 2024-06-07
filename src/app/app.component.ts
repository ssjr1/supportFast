import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReporteComponent } from './reporte/reporte.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReporteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'supportFast';
}

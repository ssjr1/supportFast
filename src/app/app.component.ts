import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdministracionComponent } from './administracion/administracion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdministracionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'supportFast';
}

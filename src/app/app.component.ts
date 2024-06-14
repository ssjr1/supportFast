import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './administracion/login/login.component';
import { RegistroComponent } from './administracion/registro/registro.component';
 

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LoginComponent, RegistroComponent, RouterLink]
})
export class AppComponent {
  title = 'supportFast';
}

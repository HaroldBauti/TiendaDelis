import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AmigurumisComponent } from '../amigurumis/amigurumis.component';
import { AmigurumisDetalleComponent } from '../amigurumis-detalle/amigurumis-detalle.component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [RouterLink,AmigurumisComponent,AmigurumisDetalleComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

}

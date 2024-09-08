import { Component } from '@angular/core';
import { DtAmigurumi } from '../../Data/dtamigurumis';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AmigurumisDetalleComponent } from '../amigurumis-detalle/amigurumis-detalle.component';

@Component({
  selector: 'app-amigurumis',
  standalone: true,
  imports: [CommonModule,RouterLink,AmigurumisDetalleComponent],
  templateUrl: './amigurumis.component.html',
  styleUrl: './amigurumis.component.css'
})
export class AmigurumisComponent {
  amig:any;

   
  constructor( private router:Router) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.amig=DtAmigurumi;
  }
}

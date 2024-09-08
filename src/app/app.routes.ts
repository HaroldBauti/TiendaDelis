import { Routes } from '@angular/router';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { AmigurumisDetalleComponent } from './component/amigurumis-detalle/amigurumis-detalle.component';
import { AmigurumisComponent } from './component/amigurumis/amigurumis.component';

export const routes: Routes = [{path:'',component:HomeComponentComponent},
{path:'amigurumis/:id',component:AmigurumisDetalleComponent},
{path:'amigurumis',component:AmigurumisComponent}

];

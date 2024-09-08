import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DtAmigurumi } from '../../Data/dtamigurumis';

@Component({
  selector: 'app-amigurumis-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './amigurumis-detalle.component.html',
  styleUrl: './amigurumis-detalle.component.css'
})
export class AmigurumisDetalleComponent {
  ami:any;
  
  constructor(private route:ActivatedRoute) {
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.paramMap.subscribe(params=>{
      const id=params.get('id');
      if(id)
      {
        this.loadAmigurumi(+id);
      }
    });
  }
  loadAmigurumi(id:number):void{
    for(var i=0;i<DtAmigurumi.length;i++){
      if(DtAmigurumi[i].id==id){
        this.ami={
          nombre:`${DtAmigurumi[i].nombre}`,
          descripcion:`${DtAmigurumi[i].descripcion}`,
          precio:`${DtAmigurumi[i].precio}`,
          img:`${DtAmigurumi[i].img}`
        }
      }
    }
  }


}

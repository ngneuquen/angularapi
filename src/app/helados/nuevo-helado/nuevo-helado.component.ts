
import { Component, Input } from '@angular/core';
import { HeladosService } from '../../services/helado.service';

@Component({
  selector: 'app-nuevo-helado',
  templateUrl: './nuevo-helado.component.html'
})
export class NuevoHeladoComponent {
  @Input() heladoEntrante;  
  constructor(private _heladoService: HeladosService) {

  }
  onSubmit(sabor, color) {
    this._heladoService.save({ sabor: sabor, color: color }).subscribe(
      response => {
        if (response.helado) {
          console.log('se subio el helado');
        } else {
          console.log('no se subio el helado');
        }
      }
    )
  }
  actualizar(helado){
    this._heladoService.update(helado._id,helado).subscribe(
      response=>
      {
        if(response.helado){
          console.log('actualizado');
        }
      }
    )
  }
}

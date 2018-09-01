
import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import { HeladosService } from '../../services/helado.service';

@Component({
  selector: 'app-lista-helados',
  templateUrl: './lista-helados.component.html'
})
export class ListaHeladosComponent implements OnInit{

  helados:Array<any>;
  @Output() heladoParaActualizar = new EventEmitter<any>();
  constructor(private _heladoService: HeladosService) { }

  ngOnInit() {
    this._heladoService.list().subscribe(
      response=>{
        if(response.helado){
          this.helados=response.helado;
        }

      }
    )
  }
  update(helado){
    this.heladoParaActualizar.emit(helado);
  }
  delete(helado){
    this._heladoService.delete(helado._id).subscribe(
      response=>{
        
      }
    )
  }
}

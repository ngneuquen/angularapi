import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public datosHelado;
  appHeladoActualizando(helado:any) {
    console.log('app', helado)
    this.datosHelado = helado;
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListaHeladosComponent } from './helados/lista-helados/lista-helados.component';
import { NuevoHeladoComponent } from './helados/nuevo-helado/nuevo-helado.component';
import { HeladosService } from './services/helado.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaHeladosComponent,
    NuevoHeladoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HeladosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

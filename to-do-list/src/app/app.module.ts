import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { AtividadeComponent } from './componentes/atividades/atividade/atividade.component';
import { ExcluirAtividadeComponent } from './componentes/atividades/excluir-atividade/excluir-atividade.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    AtividadeComponent,
    ExcluirAtividadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

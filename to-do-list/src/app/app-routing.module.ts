import { FormularioComponent } from './componentes/formulario/formulario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcluirAtividadeComponent } from './componentes/atividades/excluir-atividade/excluir-atividade.component';

const routes: Routes = [
    {
        path: "",
        redirectTo: "criarPensamento",
        pathMatch: "full"
    },
    {
        path: "criarPensamento",
        component: FormularioComponent
    },
    {
        path: "excluirPensamento",
        component: ExcluirAtividadeComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

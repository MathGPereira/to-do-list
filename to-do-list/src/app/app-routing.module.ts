import { FormularioComponent } from './componentes/formulario/formulario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: "",
        redirectTo: "criarPensamento",
        pathMatch: "full"
    },
    {
        path: "criarPensamento",
        component: FormularioComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

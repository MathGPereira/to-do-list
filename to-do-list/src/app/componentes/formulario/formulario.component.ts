import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

    atividades!: {id: number, atividade: string}

    constructor() {}

    adicionaNovaAtividade(): void {
        console.log("Adicionei a nova atividade!")
    }
}

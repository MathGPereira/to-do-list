import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css']
})
export class AtividadeComponent {

    @Input() atividades: Array<{id: number, atividade: string}> = [
        {
            id: 1,
            atividade: "Testando a primeira atividade"
        }
    ]
}

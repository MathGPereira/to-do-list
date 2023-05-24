import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

    atividades: Array<{id: number, atividade: string}> = [];

    constructor(private service: ServiceService) {}

    ngOnInit(): void {
        this.adicionaNovaAtividade();
    }

    adicionaNovaAtividade(): void {
        this.service.getAll().subscribe(listaAtividades => {
            listaAtividades.map(atividade => {
                this.atividades.push(atividade);
            });
        });
    }
}

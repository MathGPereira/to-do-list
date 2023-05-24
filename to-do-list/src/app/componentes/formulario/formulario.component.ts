import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

    atividades: Array<{id: number, atividade: string}> = [];
    inputAtividades!: HTMLInputElement;

    constructor(private service: ServiceService) {}

    ngOnInit(): void {
        this.mostraAtividades();
    }

    mostraAtividades(): void {
        this.atividades = [];

        this.service.getAll().subscribe(listaAtividades => {
            listaAtividades.map(atividade => {
                this.atividades.push(atividade);
            });
        });
    }

    adicionaNovaAtividade(): void {
        this.inputAtividades = document.querySelector("[data-atividade]") as HTMLInputElement;

        this.service.post(this.inputAtividades.value).subscribe();
        this.mostraAtividades();

        this.inputAtividades.value = "";
        this.inputAtividades.focus;
    }
}

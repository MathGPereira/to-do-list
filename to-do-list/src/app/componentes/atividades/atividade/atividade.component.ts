import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css']
})
export class AtividadeComponent implements OnInit {

    @Input() atividades: Array<any> = []

    constructor() {}

    ngOnInit(): void {}
}

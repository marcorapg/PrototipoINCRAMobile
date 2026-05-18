import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrInput, BrSelect, BrSwitch } from '@govbr-ds/webcomponents-angular/standalone';

interface VariavelTemplate {
  descricao: string;
  variavel: string;
  tipo: string;
}

@Component({
  selector: 'app-editarvariaveis',
  imports: [CommonModule, FormsModule, BrInput, BrSelect, BrSwitch],
  templateUrl: './editarvariaveis.html',
  styleUrl: './editarvariaveis.css',
})
export class Editarvariaveis {

  variaveis: VariavelTemplate[] = [
    { descricao: 'Nome do beneficiário', variavel: '{{nome}}', tipo: 'texto' },
    { descricao: 'CPF do beneficiário', variavel: '{{cpf}}', tipo: 'texto' },
    { descricao: 'Número do processo SEI', variavel: '{{numsei}}', tipo: 'texto' },
    { descricao: 'Prazo assinatura documento', variavel: '{{prazodias}}', tipo: 'numero' }
  ];

  tiposDisponiveis = [
    { label: 'Texto', value: 'texto' },
    { label: 'Número', value: 'numero' }
  ];

  adicionarLinha() {
    this.variaveis.push({
      descricao: '',
      variavel: '',
      tipo: 'texto'
    });
  }

  removerLinha(index: number) {
    this.variaveis.splice(index, 1);
  }

}
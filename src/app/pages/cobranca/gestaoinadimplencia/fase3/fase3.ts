import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cardtarefa } from '../cardtarefa/cardtarefa';
import { Gestaoinadimplenciaservice, Registro } from '../../../../services/cobranca/gestaoinadimplenciaservice';
import { BrDatetimePicker, BrDivider, BrInput, BrRadio, BrSelect, BrMessage } from '@govbr-ds/webcomponents-angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fase3',
  imports: [CommonModule, FormsModule, Cardtarefa, BrDivider, BrDatetimePicker, BrRadio, BrInput, BrSelect, BrMessage],
  templateUrl: './fase3.html',
  styleUrl: './fase3.css',
})
export class Fase3 {
  @Output() etapaChange = new EventEmitter<number>();

  stepnumber: number = 3;

  enderecoConhecido: string = '';

  onRadioChange(valor: string, event: any) {
    const checked = event.detail; // 👈 aqui está o boolean

    if (checked) {
      this.enderecoConhecido = valor;
    }
  }

  registro!: Registro | undefined;

  constructor(private db: Gestaoinadimplenciaservice, private router: Router) { }

  ngOnInit(): void {
    this.registro = this.db.getById(1);
    this.etapaAtual = 0;
  }

  etapaAtual = 0;

  steps = [
    { concluido: false },
    { concluido: false },
    { concluido: false }
  ];

  concluirEtapa(index: number) {
    this.steps[index].concluido = true;

    // Se NÃO for o último → avança
    if (index < this.steps.length - 1) {
      this.etapaAtual = index + 1;
      this.db.changeStep(1, this.etapaAtual);
    }
    // Se for o último → nenhum ativo
    else {
      this.etapaAtual = -1;
      this.db.changeStep(1, this.etapaAtual);
    }
  }

  voltarEtapa() {
    // Se terminou tudo → volta para último
    if (this.etapaAtual === -1) {
      this.etapaAtual = this.steps.length - 1;
      this.steps[this.etapaAtual].concluido = false;
      this.db.changeStep(1, this.etapaAtual);
      return;
    }

    if (this.etapaAtual > 0) {
      this.etapaAtual--;
      this.steps[this.etapaAtual].concluido = false;
      this.db.changeStep(1, this.etapaAtual);
    }
  }

  isAtivo(index: number): boolean {
    return index === this.etapaAtual;
  }

  isDesabilitado(index: number): boolean {
    return index !== this.etapaAtual;
  }

  todasConcluidas(): boolean {
    return this.steps.every(s => s.concluido);
  }

  avancarFase(): void {
    this.db.changePhase(1, 2);
    this.etapaChange.emit(5);
  }
}

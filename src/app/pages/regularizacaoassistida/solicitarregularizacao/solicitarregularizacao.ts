import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrScrim, BrSelect } from '@govbr-ds/webcomponents-angular/standalone';
import { Pageheader } from '../../../componentes/pageheader/pageheader';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-solicitarregularizacao',
  imports: [BrSelect, Pageheader, CommonModule, FormsModule, RouterLink, BrScrim],
  templateUrl: './solicitarregularizacao.html',
  styleUrl: './solicitarregularizacao.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Solicitarregularizacao {


  // Variável que controla o estado de exibição
  scrimSucesso = false;
  abrirScrimSucesso() {
    this.scrimSucesso = true;
  }
  fecharScrimSucesso() {
    this.scrimSucesso = false;
  }

  // Variável que controla o estado de exibição
  scrimAberto = false;
  abrirScrim() {
    this.scrimAberto = true;
  }
  fecharScrim() {
    this.scrimAberto = false;
  }

  // Variável que controla o estado de exibição
  scrimTutorial = false;
  abrirScrimTutorial() {
    this.scrimTutorial = true;
  }
  fecharScrimTutorial() {
    this.scrimTutorial = false;
  }

  stepTutorial = 0;
  avancarTutorial(step: number): void {
    this.stepTutorial = this.stepTutorial + 1;
  }
  finalizarTutorial(): void {
    this.fecharScrimTutorial();
  }

  step = 0;
  loteNaoEncontrado = false;
  cancelar(): void {
    console.log('Cancelado');
  }
  voltar(step: number): void { 
    this.loteNaoEncontrado = this.cpfSolicitante === '111.111.111-11';

    if(!this.loteNaoEncontrado && step === 6)
      this.step = 3;
    else 
      this.step = step - 1;
  }
  avancar(step: number): void {
    this.loteNaoEncontrado = this.cpfSolicitante === '111.111.111-11';


    //0-1-2-3-6
    //0-1-2-ScrimNaoEncontrado-ScrimTutorial-4-5-6
    if (step == 2) {
      if (this.loteNaoEncontrado && this.scrimAberto == false) {
        this.scrimAberto = true;
      } else
        this.step = 3;
    } else if (step == 3) {
      if (this.loteNaoEncontrado) {
        this.step = 4;
        this.scrimAberto = false;
        this.scrimTutorial = true;
      }
      else
        this.step = 6;
    }
    else {
      this.step = step + 1;
      this.scrimAberto = false;
    }

    console.log('Avançar' + step);
  }

  finalizar(): void {

    this.abrirScrimSucesso();
    console.log('Finalizado');
  }

  cpfSolicitante = '';

  estadoCivil = '';

  cpfConjuge = '';

  erroCpf = '';

  nomeConjuge = '';

  get mostrarConjuge(): boolean {

    return (
      this.estadoCivil === 'Casado(a)' ||
      this.estadoCivil === 'União estável'
    );
  }

  onEstadoCivilChange(event: any): void {
    this.estadoCivil = event.detail;

    this.erroCpf = '';
    this.nomeConjuge = '';

    if (!this.mostrarConjuge) {
      this.cpfConjuge = '';
    }
  }

  formatarCpf(event: any): void {

    let valor = event.target.value.replace(/\D/g, '');

    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    this.cpfSolicitante = valor;

  }

  formatarCpfConjuge(event: any): void {

    let valor = event.target.value.replace(/\D/g, '');

    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    this.cpfConjuge = valor;

  }

  consultarCpf(): void {

    this.erroCpf = '';
    this.nomeConjuge = '';

    const cpfLimpo = this.cpfConjuge.replace(/\D/g, '');

    if (!this.validarCPF(cpfLimpo)) {

      this.erroCpf = 'CPF inválido';

      return;
    }

    this.nomeConjuge = 'Maria Oliveira Santos';

  }

  validarCPF(cpf: string): boolean {

    if (cpf.length !== 11) {
      return false;
    }

    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
      resto = 0;
    }

    if (resto !== parseInt(cpf.substring(9, 10))) {
      return false;
    }

    soma = 0;

    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
      resto = 0;
    }

    if (resto !== parseInt(cpf.substring(10, 11))) {
      return false;
    }

    return true;

  }
}

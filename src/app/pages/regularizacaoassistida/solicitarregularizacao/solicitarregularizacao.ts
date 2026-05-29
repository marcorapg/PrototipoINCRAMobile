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
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    this.loteNaoEncontrado = this.estadoCivil === 'Solteiro(a)';

    if (!this.loteNaoEncontrado && step === 6)
      this.step = 2;
    else
      this.step = step - 1;
  }
  avancar(step: number): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.loteNaoEncontrado = this.estadoCivil === 'Solteiro(a)';

    if (step === 2) {
      this.step = 6;
      return;
    }

    //0-1-2-3-6
    //0-1-2-ScrimNaoEncontrado-ScrimTutorial-4-5-6
    if (step == 1) {
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

  cpfSolicitante = '082.645.978-90';

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

  // SELECT ESTADO/CIDADE/ASSENTAMENTO

  estadoSelecionado = '';
  cidadeSelecionada = '';
  assentamentoSelecionado = '';

  estadosOptions = [
    {
      label: 'Minas Gerais',
      value: 'MG',
      selected: false
    },
    {
      label: 'São Paulo',
      value: 'SP',
      selected: false
    },
    {
      label: 'Goiás',
      value: 'GO',
      selected: false
    },
    {
      label: 'Bahia',
      value: 'BA',
      selected: false
    },
    {
      label: 'Paraná',
      value: 'PR',
      selected: false
    }
  ];

  cidadesOptions: any[] = [];

  assentamentosOptions: any[] = [];

  cidadesPorEstado: any = {

    MG: [
      {
        label: 'Belo Horizonte',
        value: 'BH'
      },
      {
        label: 'Uberlândia',
        value: 'UDI'
      },
      {
        label: 'Montes Claros',
        value: 'MOC'
      },
      {
        label: 'Governador Valadares',
        value: 'GV'
      },
      {
        label: 'Juiz de Fora',
        value: 'JF'
      }
    ],

    SP: [
      {
        label: 'São Paulo',
        value: 'SAO_PAULO'
      },
      {
        label: 'Campinas',
        value: 'CAMPINAS'
      },
      {
        label: 'Ribeirão Preto',
        value: 'RIBEIRAO'
      },
      {
        label: 'Santos',
        value: 'SANTOS'
      },
      {
        label: 'Sorocaba',
        value: 'SOROCABA'
      }
    ],

    GO: [
      {
        label: 'Goiânia',
        value: 'GOIANIA'
      },
      {
        label: 'Anápolis',
        value: 'ANAPOLIS'
      },
      {
        label: 'Rio Verde',
        value: 'RIO_VERDE'
      },
      {
        label: 'Luziânia',
        value: 'LUZIANIA'
      },
      {
        label: 'Catalão',
        value: 'CATALAO'
      }
    ],

    BA: [
      {
        label: 'Salvador',
        value: 'SALVADOR'
      },
      {
        label: 'Feira de Santana',
        value: 'FEIRA'
      },
      {
        label: 'Vitória da Conquista',
        value: 'VITORIA'
      },
      {
        label: 'Ilhéus',
        value: 'ILHEUS'
      },
      {
        label: 'Barreiras',
        value: 'BARREIRAS'
      }
    ],

    PR: [
      {
        label: 'Curitiba',
        value: 'CURITIBA'
      },
      {
        label: 'Londrina',
        value: 'LONDRINA'
      },
      {
        label: 'Maringá',
        value: 'MARINGA'
      },
      {
        label: 'Cascavel',
        value: 'CASCAVEL'
      },
      {
        label: 'Ponta Grossa',
        value: 'PONTA_GROSSA'
      }
    ]

  };

  assentamentosPorCidade: any = {

    BH: [
      { label: 'Assentamento Esperança', value: 'ESPERANCA' },
      { label: 'Assentamento Novo Horizonte', value: 'NOVO_HORIZONTE' },
      { label: 'Assentamento União', value: 'UNIAO' }
    ],

    UDI: [
      { label: 'Assentamento Boa Vista', value: 'BOA_VISTA' },
      { label: 'Assentamento Vitória', value: 'VITORIA' },
      { label: 'Assentamento Campo Verde', value: 'CAMPO_VERDE' }
    ],

    SAO_PAULO: [
      { label: 'Assentamento São José', value: 'SAO_JOSE' },
      { label: 'Assentamento Liberdade', value: 'LIBERDADE' },
      { label: 'Assentamento Primavera', value: 'PRIMAVERA' }
    ],

    GOIANIA: [
      { label: 'Assentamento Goiás Forte', value: 'GOIAS_FORTE' },
      { label: 'Assentamento Cerrado', value: 'CERRADO' },
      { label: 'Assentamento Nova Terra', value: 'NOVA_TERRA' }
    ],

    SALVADOR: [
      { label: 'Assentamento Bahia Rural', value: 'BAHIA_RURAL' },
      { label: 'Assentamento Sol Nascente', value: 'SOL_NASCENTE' },
      { label: 'Assentamento Mar Azul', value: 'MAR_AZUL' }
    ],

    CURITIBA: [
      { label: 'Assentamento Araucária', value: 'ARAUCARIA' },
      { label: 'Assentamento Paraná Forte', value: 'PARANA_FORTE' },
      { label: 'Assentamento Vale Verde', value: 'VALE_VERDE' }
    ]

  };

  onEstadoChange(event: any): void {

    this.estadoSelecionado = event.detail;

    this.cidadeSelecionada = '';
    this.assentamentoSelecionado = '';

    this.assentamentosOptions = [];

    this.cidadesOptions =
      this.cidadesPorEstado[this.estadoSelecionado] || [];

  }

  onCidadeChange(event: any): void {

    this.cidadeSelecionada = event.detail;

    this.assentamentoSelecionado = '';

    this.assentamentosOptions =
      this.assentamentosPorCidade[this.cidadeSelecionada] || [];

  }

  onAssentamentoChange(event: any): void {

    this.assentamentoSelecionado = event;

  }
}
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Table } from '../../../componentes/table/table';
import { Breadcrumb } from '../../../componentes/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { BrDivider, BrInput, BrSelect, BrTag, BrScrim } from '@govbr-ds/webcomponents-angular/standalone';
import { Router, RouterLink } from '@angular/router';

declare const core: any;

@Component({
  selector: 'app-gestaoinadimplencia',
  imports: [Table, Breadcrumb, RouterLink, CommonModule, BrSelect, BrInput, BrTag, BrDivider, BrScrim],
  templateUrl: './gestaoinadimplencia.html',
  styleUrl: './gestaoinadimplencia.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class Gestaoinadimplencia implements AfterViewInit {

  modalAberta = false;

  abrirModal() {
    this.modalAberta = false;
    this.modalAberta = true;
  }

  fecharModal() {
    this.modalAberta = false;
  }

  constructor(private router: Router) { }

  fases = [
    { label: "1ª Notificação", bgcolor: "#1E3A8A" }, // azul escuro
    { label: "Acompanhamento de recebimento de notificação", bgcolor: "#065F46" }, // verde escuro
    { label: "Prazo defesa/pagamento", bgcolor: "#7C2D12" }, // marrom escuro
    { label: "Decisão administrativa", bgcolor: "#5B21B6" }, // roxo escuro
    { label: "2ª Notificação", bgcolor: "#9A3412" }, // laranja escuro
    { label: "Recurso ao superintendente", bgcolor: "#374151" }, // cinza escuro
    { label: "Trânsito em julgado", bgcolor: "#134E4A" }, // verde petróleo
    { label: "Notificações finais", bgcolor: "#6B21A8" }, // violeta
    { label: "Encaminhamentos para cadastro", bgcolor: "#78350F" }, // âmbar escuro
    { label: "Checklist final", bgcolor: "#0F172A" } // azul quase preto
  ];

  getBgColorByLabel(label: string): string {
    const fase = this.fases.find(f => f.label === label);
    return fase?.bgcolor ?? '#6B7280'; // cinza padrão
  }

  getPrescricaoBgColorByDays(days: number): string {
    if (days < 30) {
      return '#DC2626'; // vermelho
    }

    if (days <= 120) {
      return '#F59E0B'; // amarelo mais claro
    }

    return '#15803D'; // verde mais escuro
  }

  getVencimentoBgColorByDays(days: number): string {
    if (days < 3) {
      return '#DC2626'; // vermelho
    }

    if (days <= 15) {
      return '#F59E0B'; // amarelo mais claro
    }

    return '#15803D'; // verde mais escuro
  }

  superintendencias = [
    { label: 'SR-01', value: 'sr01', selected: false },
    { label: 'SR-02', value: 'sr02', selected: false },
    { label: 'SR-03', value: 'sr03', selected: false }
  ];

  tipocredito = [
    { label: 'Fomento', value: 'fomento', selected: false },
    { label: 'Fomento Mulher', value: 'fomentomulher', selected: false },
    { label: 'Aquisição de material de construção', value: 'aquisicaomaterial', selected: false },
    { label: 'Apoio inicial', value: 'apoioinicial', selected: false }
  ];

  users = [
    {
      id: 1,
      codCaso: 'CASO-001',
      nome: 'João da Silva',
      codBeneficiario: 'BEN-1045',
      projetoAssentamento: 'PA Esperança',
      superintendencia: 'SR-12',
      tipoCredito: 'Fomento',
      valor: 'R$ 3.500,00',
      fase: '1ª Notificação',
      prescricao: 15,
      vencimento: 10
    },
    {
      id: 2,
      codCaso: 'CASO-002',
      nome: 'Carlos Souza',
      codBeneficiario: 'BEN-2041',
      projetoAssentamento: 'PA Nova Vida',
      superintendencia: 'SR-04',
      tipoCredito: 'Apoio Inicial',
      valor: 'R$ 2.400,00',
      fase: 'Acompanhamento de recebimento de notificação',
      prescricao: 100,
      vencimento: 40
    },
    {
      id: 3,
      codCaso: 'CASO-003',
      nome: 'Mariana Costa',
      codBeneficiario: 'BEN-3321',
      projetoAssentamento: 'PA Santa Rita',
      superintendencia: 'SR-07',
      tipoCredito: 'Fomento',
      valor: 'R$ 3.000,00',
      fase: 'Prazo defesa/pagamento',
      prescricao: 89,
      vencimento: 10
    },
    {
      id: 4,
      codCaso: 'CASO-004',
      nome: 'Paulo Alves',
      codBeneficiario: 'BEN-1102',
      projetoAssentamento: 'PA Boa Vista',
      superintendencia: 'SR-21',
      tipoCredito: 'Fomento Mulher',
      valor: 'R$ 15.000,00',
      fase: 'Decisão administrativa',
      prescricao: 150,
      vencimento: 30
    },
    {
      id: 5,
      codCaso: 'CASO-005',
      nome: 'Lucas Ferreira',
      codBeneficiario: 'BEN-5402',
      projetoAssentamento: 'PA Horizonte',
      superintendencia: 'SR-05',
      tipoCredito: 'Fomento',
      valor: 'R$ 3.500,00',
      fase: '2ª Notificação',
      prescricao: 45,
      vencimento: 5
    },
    {
      id: 7,
      codCaso: 'CASO-006',
      nome: 'Juliana Rocha',
      codBeneficiario: 'BEN-6543',
      projetoAssentamento: 'PA União',
      superintendencia: 'SR-12',
      tipoCredito: 'Apoio Inicial',
      valor: 'R$ 2.500,00',
      fase: 'Recurso ao superintendente',
      prescricao: 0,
      vencimento: 0
    },
    {
      id: 8,
      codCaso: 'CASO-007',
      nome: 'Roberto Pereira',
      codBeneficiario: 'BEN-7642',
      projetoAssentamento: 'PA Lago Azul',
      superintendencia: 'SR-18',
      tipoCredito: 'Fomento',
      valor: 'R$ 3.200,00',
      fase: 'Trânsito em julgado',
      prescricao: 70,
      vencimento: 12
    },
    {
      id: 9,
      codCaso: 'CASO-008',
      nome: 'Patrícia Gomes',
      codBeneficiario: 'BEN-8891',
      projetoAssentamento: 'PA Bela Vista',
      superintendencia: 'SR-02',
      tipoCredito: 'Habitacional',
      valor: 'R$ 14.500,00',
      fase: 'Notificações finais',
      prescricao: 23,
      vencimento: 20
    },
    {
      id: 11,
      codCaso: 'CASO-009',
      nome: 'Fernando Martins',
      codBeneficiario: 'BEN-9012',
      projetoAssentamento: 'PA Novo Horizonte',
      superintendencia: 'SR-09',
      tipoCredito: 'Fomento',
      valor: 'R$ 3.400,00',
      fase: 'Encaminhamentos para cadastro',
      prescricao: 110,
      vencimento: 18
    },
    {
      id: 12,
      codCaso: 'CASO-010',
      nome: 'Camila Ribeiro',
      codBeneficiario: 'BEN-7774',
      projetoAssentamento: 'PA Campo Verde',
      superintendencia: 'SR-14',
      tipoCredito: 'Apoio Inicial',
      valor: 'R$ 2.600,00',
      fase: 'Checklist final',
      prescricao: 130,
      vencimento: 25
    }
  ];

  actions = [
    {
      id: 'visualizar',
      icon: 'fa-eye',
      tooltip: 'Visualizar',
      action: (row: any) => this.view(row)
    },
    {
      id: 'debitos',
      icon: 'fa-coins',
      tooltip: 'Débitos Vinculados ao Caso',
      action: (row: any) => this.abrirModal()
    }    
  ];

  view(row: any) {
    this.router.navigate(['/cobranca/gestaoinadimplencia/visualizarcaso/'+row.id]);
  }

  delete(row: any) { console.log('delete', row); }

  ngAfterViewInit(): void {

    const checkboxList = []
    for (const brCheckbox of window.document.querySelectorAll('.br-checkbox')) {
      checkboxList.push(new core.BRCheckbox('br-checkbox', brCheckbox))
    }

    const inputList = []
    for (const brInput of window.document.querySelectorAll('.br-input')) {
      inputList.push(new core.BRInput('br-input', brInput))
    }

    const tooltipList = []
    for (const brTooltip of window.document.querySelectorAll('.br-tooltip:not(.utilities)')) {
      tooltipList.push(new core.BRTooltip('br-tooltip', brTooltip))
    }

    const itemList = []
    for (const brItem of window.document.querySelectorAll('.br-item')) {
      itemList.push(new core.BRItem('br-item', brItem))
    }

    const selectList = []
    const notFoundElement = `
    <div class="br-item not-found">
      <div class="container">
      <div class="row">
        <div class="col">
        <p><strong>Ops!</strong> Não encontramos o que você está procurando!</p>
        </div>
      </div>
      </div>
    </div>
    `
    for (const brSelect of window.document.querySelectorAll('.br-select')) {
      const brselect = new core.BRSelect('br-select', brSelect, notFoundElement)
      //Exemplo de uso de listener do select
      brSelect.addEventListener('onChange', function (e) { })
      selectList.push(brselect)
    }

    // const breadcrumbList = []
    // for (const brBreadcrumb of window.document.querySelectorAll('.br-breadcrumb')) {
    //   breadcrumbList.push(new core.BRBreadcrumb('br-breadcrumb', brBreadcrumb))
    // }
  }
}
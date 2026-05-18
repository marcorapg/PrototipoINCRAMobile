import { AfterViewInit, Component } from '@angular/core';
import { Breadcrumb } from '../../../../componentes/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { BrTable, BrTableCell, BrTableHeaderCell, BrTableHeaderRow, BrTableRow, BrCheckbox, BrTag, BrSelect, BrInput, BrDatetimePicker, BrTab, BrTabItem } from '@govbr-ds/webcomponents-angular/standalone';
import { RouterLink } from '@angular/router';

declare const core: any;

@Component({
  selector: 'app-processamentolote',
  imports: [Breadcrumb, CommonModule, RouterLink, BrTable, BrTableCell, BrTableRow, BrTableHeaderRow, BrTableHeaderCell, BrCheckbox, BrTag, BrSelect, BrInput, BrDatetimePicker, BrTab, BrTabItem],
  templateUrl: './processamentolote.html',
  styleUrl: './processamentolote.css',
})
export class Processamentolote implements AfterViewInit {

  registros = [
    {
      caso: 'IND-2025-0042',
      nome: 'Pedro Alcântara Silva',
      cpf: '999.999.999-99',
      pa: 'PA Sol Nascente',
      lote: '12',
      valor: 'R$6.000,00',
      status: 'Pendente',
      prazo: '12/03/2025'
    },
    {
      caso: 'IND-2025-0043',
      nome: 'Mariana Costa Oliveira',
      cpf: '123.456.789-10',
      pa: 'PA Boa Esperança',
      lote: '08',
      valor: 'R$4.250,00',
      status: 'Minuta Gerada',
      prazo: '18/04/2025'
    },
    {
      caso: 'IND-2025-0044',
      nome: 'Carlos Eduardo Mendes',
      cpf: '321.654.987-00',
      pa: 'PA Nova União',
      lote: '21',
      valor: 'R$9.800,00',
      status: 'Emitida',
      prazo: '05/05/2025'
    },
    {
      caso: 'IND-2025-0045',
      nome: 'Juliana Ribeiro Santos',
      cpf: '987.123.456-55',
      pa: 'PA Vale Verde',
      lote: '03',
      valor: 'R$2.150,00',
      status: 'Recebida',
      prazo: '27/02/2025'
    }
  ];

  getStatusColor(status?: string): string {
    switch (status) {
      case 'Pendente':
        return '#DC3545'; // vermelho

      case 'Minuta Gerada':
        return '#007BFF'; // azul

      case 'Emitida':
        return '#7ED957'; // verde claro

      case 'Recebida':
        return '#1E7E34'; // verde escuro

      default:
        return '#999999'; // fallback
    }
  }

  ngAfterViewInit(): void {
    const checkboxList = []
    for (const brCheckbox of window.document.querySelectorAll('.br-checkbox')) {
      checkboxList.push(new core.BRCheckbox('br-checkbox', brCheckbox))
    }

    const tableList = []
    for (const [index, brTable] of window.document.querySelectorAll('.br-table').entries()) {
      tableList.push(new core.BRTable('br-table', brTable, index))
    }
  }
}
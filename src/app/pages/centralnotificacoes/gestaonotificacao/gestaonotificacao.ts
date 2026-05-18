import { Component } from '@angular/core';
import { Breadcrumb } from '../../../componentes/breadcrumb/breadcrumb';
import { BrTable, BrSelect, BrInput, BrButton, BrScrim, BrTag, BrDatetimePicker } from '@govbr-ds/webcomponents-angular/standalone';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type TipoNotificacao = 'Simples' | 'Ciência' | 'Assinatura';
type StatusNotificacao =
  | 'Enviada'
  | 'Lida'
  | 'Pendente Ciência'
  | 'Ciência Dada'
  | 'Pendente Assinatura'
  | 'Assinatura Finalizada'
  | 'Cancelada';

interface Notificacao {
  id: string;
  nomedestinatario: string;
  cpfdestinatario: string;
  servicoorigem: string;
  tipo: TipoNotificacao;
  status: StatusNotificacao;
  dataenvio: string
}

@Component({
  selector: 'app-gestaonotificacao',
  imports: [Breadcrumb, BrTable, BrSelect, BrInput, BrButton, BrScrim, BrTag, BrDatetimePicker, CommonModule, RouterLink],
  templateUrl: './gestaonotificacao.html',
  styleUrl: './gestaonotificacao.css',
})
export class Gestaonotificacao {
  notificacoes: Notificacao[] = [
    {
      id: 'NOT-12031A',
      nomedestinatario: 'José Pereira',
      cpfdestinatario: '123.456.789-01',
      servicoorigem: 'PGT Cobrança',
      tipo: 'Simples',
      status: 'Lida',
      dataenvio: '31/12/2026 10:34'
    },
    {
      id: 'NOT-12032A',
      nomedestinatario: 'Maria Freitas',
      cpfdestinatario: '987.654.321-00',
      servicoorigem: 'PGT Regularização Fundiária Urbana',
      tipo: 'Ciência',
      status: 'Ciência Dada',
      dataenvio: '11/03/2026 12:31'
    },
    {
      id: 'NOT-12033A',
      nomedestinatario: 'Agnaldo Dias',
      cpfdestinatario: '456.789.123-55',
      servicoorigem: 'PGT Reforma Agrária',
      tipo: 'Simples',
      status: 'Enviada',
      dataenvio: '01/08/2025 14:34'
    },
    {
      id: 'NOT-12034A',
      nomedestinatario: 'Márcia Donato',
      cpfdestinatario: '741.852.963-22',
      servicoorigem: 'PGT Regularização Fundiária Rural',
      tipo: 'Assinatura',
      status: 'Cancelada',
      dataenvio: '05/02/2026 07:34'
    },
    {
      id: 'NOT-12035A',
      nomedestinatario: 'Reinaldo Gonçalves',
      cpfdestinatario: '159.357.258-46',
      servicoorigem: 'PGT Cobrança',
      tipo: 'Ciência',
      status: 'Pendente Assinatura',
      dataenvio: '03/06/2026 18:34'
    }
  ];

  getTipoColor(tipo: string): string {
    switch (tipo) {
      case 'Simples':
        return '#1976d2'; // azul
      case 'Ciência':
        return '#f9a825'; // amarelo
      case 'Assinatura':
        return '#6a1b9a'; // roxo
      default:
        return '#9e9e9e'; // fallback
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Enviada':
        return '#1976d2'; // azul
      case 'Lida':
        return '#2e7d32'; // verde
      case 'Pendente Ciência':
        return '#f9a825'; // amarelo
      case 'Ciência Dada':
        return '#00897b'; // verde/teal
      case 'Pendente Assinatura':
        return '#ef6c00'; // laranja
      case 'Assinatura Finalizada':
        return '#6a1b9a'; // roxo
      case 'Cancelada':
        return '#d32f2f'; // vermelho
      default:
        return '#9e9e9e'; // fallback
    }
  }
}

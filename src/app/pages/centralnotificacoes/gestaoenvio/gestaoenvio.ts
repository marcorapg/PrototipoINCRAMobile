import { Component } from '@angular/core';
import { Breadcrumb } from '../../../componentes/breadcrumb/breadcrumb';
import { BrTable, BrSelect, BrInput, BrButton, BrScrim, BrTag, BrDatetimePicker } from '@govbr-ds/webcomponents-angular/standalone';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type TipoNotificacaoEnvio = 'Simples' | 'Ciência' | 'Assinatura';
type StatusEnvio =
  | 'Processando'
  | 'Concluído'
  | 'Erro'
  | 'Cancelado';

interface Notificacao {
  id: string;
  nometemplate: string;
  servicoorigem: string;
  tipo: TipoNotificacaoEnvio;
  status: StatusEnvio;
  quantidadenotificacoes: number;
  dataenvio: string
}

@Component({
  selector: 'app-gestaoenvio',
  imports: [Breadcrumb, BrTable, BrSelect, BrInput, BrButton, BrScrim, BrTag, BrDatetimePicker, CommonModule, RouterLink],
  templateUrl: './gestaoenvio.html',
  styleUrl: './gestaoenvio.css',
})
export class Gestaoenvio {
  notificacoes: Notificacao[] = [
    {
      id: 'NOT-12031A',
      nometemplate: 'Solicitação de Assinatura de Documento',
      servicoorigem: 'PGT Cobrança',
      tipo: 'Simples',
      status: 'Concluído',
      quantidadenotificacoes: 125,
      dataenvio: '31/12/2026 10:34'
    },
    {
      id: 'NOT-12032B',
      nometemplate: 'Lembrete de Pendência',
      servicoorigem: 'PGT Reforma Agrária',
      tipo: 'Ciência',
      status: 'Processando',
      quantidadenotificacoes: 84,
      dataenvio: '02/01/2027 08:15'
    },
    {
      id: 'NOT-12033C',
      nometemplate: 'Aviso de Atualização de Sistema',
      servicoorigem: 'PGT Cobrança',
      tipo: 'Assinatura',
      status: 'Erro',
      quantidadenotificacoes: 230,
      dataenvio: '02/01/2027 14:47'
    },
    {
      id: 'NOT-12034D',
      nometemplate: 'Lembrete de Pendência',
      servicoorigem: 'PGT Regularização Fundiária Rural',
      tipo: 'Simples',
      status: 'Cancelado',
      quantidadenotificacoes: 42,
      dataenvio: '03/01/2027 09:02'
    },
    {
      id: 'NOT-12035E',
      nometemplate: 'Confirmação de Leitura Obrigatória',
      servicoorigem: 'PGT Regularização Fundiária Rural',
      tipo: 'Assinatura',
      status: 'Concluído',
      quantidadenotificacoes: 317,
      dataenvio: '03/01/2027 16:28'
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
      case 'Processando':
        return '#1976d2'; // azul
      case 'Concluído':
        return '#2e7d32'; // verde
      case 'Erro':
        return '#d32f2f'; // vermelho
      case 'Cancelado':
        return '#ef6c00'; // laranja        
      default:
        return '#9e9e9e'; // fallback
    }
  }
}

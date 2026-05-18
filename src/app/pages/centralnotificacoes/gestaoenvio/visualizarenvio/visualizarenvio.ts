import { Component } from '@angular/core';
import { Breadcrumb } from '../../../../componentes/breadcrumb/breadcrumb';
import { BrTab, BrTabItem, BrButton, BrInput, BrIcon, BrTag, BrDatetimePicker, BrSelect, BrTable, BrTableCell, BrTableHeaderRow, BrTableRow, BrTableHeaderCell } from '@govbr-ds/webcomponents-angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { QuillModule } from 'ngx-quill';

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
  selector: 'app-visualizarenvio',
  imports: [Breadcrumb, BrTab, BrTabItem, BrSelect, BrTag, BrButton, BrInput, BrTable, BrTableCell, BrTableHeaderRow, BrTableHeaderCell, BrTableRow, BrDatetimePicker, QuillModule, BrIcon, CommonModule, FormsModule, RouterLink],
  templateUrl: './visualizarenvio.html',
  styleUrl: './visualizarenvio.css',
})
export class Visualizarenvio {

  titulo = "Solicitação de Assinatura de Documento - Processo SEI nº {{numsei}}";
  conteudo = "<p>Prezado(a)&nbsp;Carlos Eduardo Souza,</p><p></p><p>Informamos&nbsp;que&nbsp;há&nbsp;um&nbsp;documento&nbsp;anexado&nbsp;a&nbsp;esta&nbsp;mensagem&nbsp;para&nbsp;assinatura,&nbsp;referente&nbsp;ao&nbsp;processo&nbsp;SEI&nbsp;nº&nbsp;<strong>13248.105037/5479-07</strong>,&nbsp;vinculado&nbsp;ao&nbsp;seu&nbsp;cadastro.</p><p>Para&nbsp;dar&nbsp;continuidade&nbsp;ao&nbsp;atendimento,&nbsp;é&nbsp;necessário&nbsp;que&nbsp;a&nbsp;assinatura&nbsp;seja&nbsp;realizada&nbsp;no&nbsp;prazo&nbsp;de&nbsp;<strong>7&nbsp;</strong>dias&nbsp;a&nbsp;contar&nbsp;do&nbsp;recebimento&nbsp;desta&nbsp;notificação.</p><p>Dados&nbsp;do&nbsp;beneficiário:</p><ul><li>Nome:&nbsp;<strong>Carlos Eduardo Souza</strong></li><li>CPF:&nbsp;<strong>987.654.321-00</strong></li></ul><p>A&nbsp;assinatura&nbsp;deve&nbsp;ser&nbsp;realizada&nbsp;por&nbsp;meio&nbsp;do&nbsp;sistema&nbsp;indicado&nbsp;nesta&nbsp;notificação.</p><p></p><p>Em&nbsp;caso&nbsp;de&nbsp;dúvidas,&nbsp;entre&nbsp;em&nbsp;contato&nbsp;com&nbsp;a&nbsp;unidade&nbsp;responsável&nbsp;pelo&nbsp;seu&nbsp;atendimento.</p><p></p><p>Atenciosamente,</p><p><strong>INCRA&nbsp;-&nbsp;Instituto&nbsp;Nacional&nbsp;de&nbsp;Colonização&nbsp;e&nbsp;Reforma&nbsp;Agrária</strong></p>";

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

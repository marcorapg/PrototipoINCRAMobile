import { Component } from '@angular/core';
import { BrButton, BrTab, BrTabItem, BrInput, BrIcon } from '@govbr-ds/webcomponents-angular/standalone';
import { Breadcrumb } from '../../../../componentes/breadcrumb/breadcrumb';
import { Linhatempo } from '../linhatempo/linhatempo';
import { QuillModule } from 'ngx-quill';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-visualizarnotificacao',
  imports: [Breadcrumb, BrTab, BrTabItem, BrButton, BrInput, BrIcon, QuillModule, Linhatempo, CommonModule, FormsModule, RouterLink],
  templateUrl: './visualizarnotificacao.html',
  styleUrl: './visualizarnotificacao.css',
})
export class Visualizarnotificacao {
  linhatempo = [
    {
      pendente: false,
      data: '08/04/2026 09:00',
      acao: 'Notificação criada',
      descricao: 'Sistema PGT'
    },
    {
      pendente: false,
      data: '08/04/2026 09:01',
      acao: 'Emitida',
      descricao: 'Provider: NotificaBR'
    },
    {
      pendente: false,
      data: '08/04/2026 09:02',
      acao: 'Entregue',
      descricao: 'Caixa Postal GOV.BR'
    },
    {
      pendente: true,
      data: '',
      acao: 'Aguardando assinatura',
      descricao: 'Ação pendente'
    }
  ];

  titulo = "Solicitação de Assinatura de Documento - Processo SEI nº {{numsei}}";
  conteudo = "<p>Prezado(a)&nbsp;Carlos Eduardo Souza,</p><p></p><p>Informamos&nbsp;que&nbsp;há&nbsp;um&nbsp;documento&nbsp;anexado&nbsp;a&nbsp;esta&nbsp;mensagem&nbsp;para&nbsp;assinatura,&nbsp;referente&nbsp;ao&nbsp;processo&nbsp;SEI&nbsp;nº&nbsp;<strong>13248.105037/5479-07</strong>,&nbsp;vinculado&nbsp;ao&nbsp;seu&nbsp;cadastro.</p><p>Para&nbsp;dar&nbsp;continuidade&nbsp;ao&nbsp;atendimento,&nbsp;é&nbsp;necessário&nbsp;que&nbsp;a&nbsp;assinatura&nbsp;seja&nbsp;realizada&nbsp;no&nbsp;prazo&nbsp;de&nbsp;<strong>7&nbsp;</strong>dias&nbsp;a&nbsp;contar&nbsp;do&nbsp;recebimento&nbsp;desta&nbsp;notificação.</p><p>Dados&nbsp;do&nbsp;beneficiário:</p><ul><li>Nome:&nbsp;<strong>Carlos Eduardo Souza</strong></li><li>CPF:&nbsp;<strong>987.654.321-00</strong></li></ul><p>A&nbsp;assinatura&nbsp;deve&nbsp;ser&nbsp;realizada&nbsp;por&nbsp;meio&nbsp;do&nbsp;sistema&nbsp;indicado&nbsp;nesta&nbsp;notificação.</p><p></p><p>Em&nbsp;caso&nbsp;de&nbsp;dúvidas,&nbsp;entre&nbsp;em&nbsp;contato&nbsp;com&nbsp;a&nbsp;unidade&nbsp;responsável&nbsp;pelo&nbsp;seu&nbsp;atendimento.</p><p></p><p>Atenciosamente,</p><p><strong>INCRA&nbsp;-&nbsp;Instituto&nbsp;Nacional&nbsp;de&nbsp;Colonização&nbsp;e&nbsp;Reforma&nbsp;Agrária</strong></p>";
}

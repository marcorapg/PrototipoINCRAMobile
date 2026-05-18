import { Component } from '@angular/core';
import { Breadcrumb } from '../../../../componentes/breadcrumb/breadcrumb';
import { Editarvariaveis } from '../editarvariaveis/editarvariaveis';
import { BrButton, BrTab, BrTabItem, BrInput, BrSelect, BrTextarea, BrSwitch, BrUpload } from '@govbr-ds/webcomponents-angular/standalone';
import { RouterLink } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Editardocumentos } from '../editardocumentos/editardocumentos';

@Component({
  selector: 'app-editartemplate',
  imports: [Breadcrumb, Editarvariaveis, Editardocumentos, BrButton, BrUpload, BrTab, BrTabItem, BrInput, BrSelect, BrTextarea, BrSwitch, RouterLink, QuillModule, CommonModule, FormsModule],
  templateUrl: './editartemplate.html',
  styleUrl: './editartemplate.css',
})
export class Editartemplate {
  nomeTemplate = "Notificação de cobrança";
  idTemplate = "TMP-39203";
  descricaoTemplate = "Notificação destinada à comunicação de pendências financeiras vinculadas ao beneficiário";

  titulo = "Solicitação de Assinatura de Documento - Processo SEI nº {{numsei}}";
  conteudo = "<p>Prezado(a)&nbsp;{{nome}},</p><p></p><p>Informamos&nbsp;que&nbsp;há&nbsp;um&nbsp;documento&nbsp;anexado&nbsp;a&nbsp;esta&nbsp;mensagem&nbsp;para&nbsp;assinatura,&nbsp;referente&nbsp;ao&nbsp;processo&nbsp;SEI&nbsp;nº&nbsp;<strong>{{numsei}}</strong>,&nbsp;vinculado&nbsp;ao&nbsp;seu&nbsp;cadastro.</p><p>Para&nbsp;dar&nbsp;continuidade&nbsp;ao&nbsp;atendimento,&nbsp;é&nbsp;necessário&nbsp;que&nbsp;a&nbsp;assinatura&nbsp;seja&nbsp;realizada&nbsp;no&nbsp;prazo&nbsp;de&nbsp;<strong>{{prazodias}}&nbsp;</strong>dias&nbsp;a&nbsp;contar&nbsp;do&nbsp;recebimento&nbsp;desta&nbsp;notificação.</p><p>Dados&nbsp;do&nbsp;beneficiário:</p><ul><li>Nome:&nbsp;<strong>{{nome}}</strong></li><li>CPF:&nbsp;<strong>{{cpf}}</strong></li></ul><p>A&nbsp;assinatura&nbsp;deve&nbsp;ser&nbsp;realizada&nbsp;por&nbsp;meio&nbsp;do&nbsp;sistema&nbsp;indicado&nbsp;nesta&nbsp;notificação.</p><p></p><p>Em&nbsp;caso&nbsp;de&nbsp;dúvidas,&nbsp;entre&nbsp;em&nbsp;contato&nbsp;com&nbsp;a&nbsp;unidade&nbsp;responsável&nbsp;pelo&nbsp;seu&nbsp;atendimento.</p><p></p><p>Atenciosamente,</p><p><strong>INCRA&nbsp;-&nbsp;Instituto&nbsp;Nacional&nbsp;de&nbsp;Colonização&nbsp;e&nbsp;Reforma&nbsp;Agrária</strong></p>";
  rodape = "Esta é uma mensagem automática. Não responda este e-mail.";

  templateWhatsAppAtivo = false;
  mensagemWhatsApp = "Olá, {{nome}}.\n\nO INCRA disponibilizou um documento para assinatura referente ao processo SEI nº {{numsei}}.\n\nPrazo para assinatura: {{prazodias}} dias.\n\nAcesse o sistema para visualizar e assinar o documento.";

  templateSMSAtivo = false;
  mensagemSMS = "INCRA: Doc. pendente do processo {{numsei}}. Assine em até {{prazodias}} dias pelo sistema. Beneficiário: {{nome}}.";

  prazo = false;
  numeroDiasResposta = "7";

  editor: any;
  templateEmailAtivo = false;

  setEditor(quill: any) {
    this.editor = quill;

    this.editor.enable(this.templateEmailAtivo);
  }

  toggleEditor() {
    this.templateEmailAtivo = !this.templateEmailAtivo;

    if (this.editor) {
      this.editor.enable(this.templateEmailAtivo);
    }
  }


  salvar() {
    console.log(this.conteudo);
  }
}

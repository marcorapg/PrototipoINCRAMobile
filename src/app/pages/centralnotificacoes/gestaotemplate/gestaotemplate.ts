import { Component } from '@angular/core';
import { Breadcrumb } from '../../../componentes/breadcrumb/breadcrumb';
import { BrInput, BrSelect, BrTable, BrButton, BrScrim, BrTag } from '@govbr-ds/webcomponents-angular/standalone';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type TipoTemplate = 'Simples' | 'Ciência' | 'Assinatura';
type StatusTemplate = 'Ativo' | 'Inativo';

interface TemplateNotificacao {
  id: string;
  nome: string;
  tipo: TipoTemplate;
  sistema: string;
  status: StatusTemplate;
}

@Component({
  selector: 'app-gestaotemplate',
  imports: [Breadcrumb, BrTable, BrSelect, BrInput, BrButton, BrTag, BrScrim, CommonModule, RouterLink],
  templateUrl: './gestaotemplate.html',
  styleUrl: './gestaotemplate.css',
})

export class Gestaotemplate {

  templates: TemplateNotificacao[] = [
    {
      id: 'TMP-2934',
      nome: 'Notificação de Boas-Vindas',
      tipo: 'Simples',
      sistema: 'PGT Reforma Agrária',
      status: 'Ativo'
    },
    {
      id: 'TMP-23541',
      nome: 'Aviso de Atualização de Sistema',
      tipo: 'Ciência',
      sistema: 'PGT Cobrança',
      status: 'Ativo'
    },
    {
      id: 'TMP-1235',
      nome: 'Solicitação de Assinatura de Documento',
      tipo: 'Assinatura',
      sistema: 'Todos',
      status: 'Ativo'
    },
    {
      id: 'TMP-4213',
      nome: 'Lembrete de Pendência',
      tipo: 'Simples',
      sistema: 'PGT Regularização Fundiária Rural',
      status: 'Inativo'
    },
    {
      id: 'TMP-1234',
      nome: 'Confirmação de Leitura Obrigatória',
      tipo: 'Ciência',
      sistema: 'PGT Cobrança',
      status: 'Inativo'
    }
  ];

  abrirScrim() {
    const scrim = document.querySelector('#scrimExcluir') as any;
    scrim.open();
  }

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
      case 'Ativo':
        return '#6a1b9a'; // roxo
      case 'Inativo':
        return '#d32f2f'; // vermelho
      default:
        return '#9e9e9e'; // fallback
    }
  }
}
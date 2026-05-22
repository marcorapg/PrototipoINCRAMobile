import { Component } from '@angular/core';
import { Pageheader } from '../../componentes/pageheader/pageheader';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-regularizacaoassistida',
  imports: [Pageheader, CommonModule, RouterModule],
  templateUrl: './regularizacaoassistida.html',
  styleUrl: './regularizacaoassistida.css',
})
export class Regularizacaoassistida {
  solicitacoes = [
    {
      protocolo: 'PROTOCOLO #2026-00125',
      assentamento: 'Assentamento Nova Esperança',
      data: '15/05/2026',
      status: 'Em análise',
      statusClass: 'status-analise'
    },
    {
      protocolo: 'PROTOCOLO #2026-00110',
      assentamento: 'Assentamento Campo Verde',
      data: '02/05/2026',
      status: 'Aprovado',
      statusClass: 'status-aprovado'
    },
    {
      protocolo: 'PROTOCOLO #2026-00098',
      assentamento: 'Assentamento Bela Vista',
      data: '21/04/2026',
      status: 'Pendência',
      statusClass: 'status-pendente'
    }
  ];

  abrirSolicitacao(solicitacao: any) {
    console.log('Abrir solicitação', solicitacao);
  }
}

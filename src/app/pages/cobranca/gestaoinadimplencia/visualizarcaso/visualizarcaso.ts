import { Breadcrumb } from '../../../../componentes/breadcrumb/breadcrumb';
import { Linhatempo } from '../linhatempo/linhatempo';
import { RouterLink } from '@angular/router';
import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fase1 } from '../fase1/fase1';
import { Fase2 } from '../fase2/fase2';
import { Fase3 } from '../fase3/fase3';
import { Fase4 } from '../fase4/fase4';
import { Fase5 } from '../fase5/fase5';
import { CommonModule } from '@angular/common';
import { Gestaoinadimplenciaservice } from '../../../../services/cobranca/gestaoinadimplenciaservice';
import { Faseacompanhamento } from '../faseacompanhamento/faseacompanhamento';
import { Fase6 } from '../fase6/fase6';
import { Fase7 } from '../fase7/fase7';
import { Fase8 } from '../fase8/fase8';
import { Fase9 } from '../fase9/fase9';

@Component({
  selector: 'app-visualizarcaso',
  imports: [CommonModule, Breadcrumb, Linhatempo, RouterLink, Fase1, Fase2, Fase3, Fase4, Fase5, Fase6, Fase7, Fase8, Fase9, Faseacompanhamento],
  templateUrl: './visualizarcaso.html',
  styleUrl: './visualizarcaso.css',
})
export class Visualizarcaso {

  constructor(private db: Gestaoinadimplenciaservice, private route: ActivatedRoute) { }

  id: number = 1;
  fase?: number = 0;

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    //this.fase = this.db.getById(this.id)?.fase;
    this.fase = this.id;
  }

  onEtapaChange(novaEtapa: number) {
    this.fase = novaEtapa;
  }

  getEtapaDescricao(etapa: number): string {
    const etapas = [
      '1ª Notificação',
      'Acompanhamento de recebimento de notificação',
      'Prazo defesa/pagamento',
      'Decisão administrativa',
      '2ª Notificação',
      'Acompanhamento de recebimento de notificação',
      'Recurso ao superintendente',
      'Trânsito em julgado',
      'Notificações finais',
      'Acompanhamento de recebimento de notificação',
      'Encaminhamentos para cadastro',
      'Checklist final'
    ];

    return etapas[etapa - 1] || 'Caso concluído';
  }

  getEtapaClasse(etapa: number): string {
    if (etapa <= 3) return 'danger';        // início / crítico
    if (etapa <= 6) return 'warning';       // atenção
    if (etapa <= 9) return 'info';          // andamento
    if (etapa <= 12) return 'success';      // finalização

    return 'secondary';
  }

  // no componente pai
  timeline = [
    {
      id: 1,
      titulo: '1ª Notificação',
      descricao: 'Emitir notificação concedendo 30 dias para pagamento ou defesa.',
      meta: 'Em andamento'
    },
    {
      id: 2,
      titulo: 'Acompanhamento de recebimento de notificação',
      descricao: 'Acompanhamento de recebimento de notificação.',
      meta: 'Pendente'
    },
    {
      id: 3,
      titulo: 'Prazo defesa/pagamento',
      descricao: 'Contagem 30 dias após o recebimento da notificação.',
      meta: 'Pendente'
    },
    {
      id: 4,
      titulo: 'Decisão administrativa',
      descricao: 'Chefe da SR/D prolata decisão sobre defesa ou reconhece crédito em favor do Incra.',
      meta: 'Pendente'
    },
    {
      id: 5,
      titulo: '2ª Notificação',
      descricao: 'Nova notificação concedendo 30 dias para pagamento ou recurso.',
      meta: 'Pendente'
    },
    {
      id: 6,
      titulo: 'Acompanhamento de recebimento de notificação',
      descricao: 'Acompanhamento de recebimento de notificação.',
      meta: 'Pendente'
    },
    {
      id: 7,
      titulo: 'Recurso ao superintendente',
      descricao: 'Efeito suspensivo (prescrição). Análise técnica pela SR/O.',
      meta: 'Pendente'
    },
    {
      id: 8,
      titulo: 'Trânsito em julgado',
      descricao: 'Após esgotamento de instâncias. Dados congelados após emissão da certidão.',
      meta: 'Pendente'
    },
    {
      id: 9,
      titulo: 'Notificações finais',
      descricao: 'Notificação com prazo de 15 dias.',
      meta: 'Pendente'
    },
    {
      id: 10,
      titulo: 'Acompanhamento de recebimento de notificação',
      descricao: 'Acompanhamento de recebimento de notificação.',
      meta: 'Pendente'
    },
    {
      id: 11,
      titulo: 'Encaminhamentos para cadastro',
      descricao: 'Pré-cadastro PGF + Inscrição CADIN (DOC-2).',
      meta: 'Pendente'
    },
    {
      id: 12,
      titulo: 'Checklist final',
      descricao: 'Validação de todas etapas.',
      meta: 'Pendente'
    }
  ];
}
import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { BrDivider, BrTab, BrTabItem } from '@govbr-ds/webcomponents-angular/standalone';

export interface TimelineItem {
  id: number;
  titulo: string;
  descricao: string;
  meta?: string;
}

@Component({
  selector: 'app-linhatempo',
  imports: [CommonModule, BrDivider, BrTab, BrTabItem],
  templateUrl: './linhatempo.html',
  styleUrl: './linhatempo.css',
})

export class Linhatempo implements OnChanges {
  @Input() items: TimelineItem[] = [];
  @Input() etapaAtual!: number;

  itemsComEstado: (TimelineItem & { estado: 'done' | 'current' | 'pending' })[] = [];

  ngOnChanges(): void {
    this.processarEstados();
  }

  private processarEstados() {
    this.itemsComEstado = this.items.map(item => {
      let estado: 'done' | 'current' | 'pending';

      if (item.id < this.etapaAtual) {
        estado = 'done';
        item.meta = "Concluído em 11/07/2025 - por Analista";
      } else if (item.id === this.etapaAtual) {
        estado = 'current';
        item.meta = "Em andamento";
      } else {
        estado = 'pending';
        item.meta = "Pendente";
      }

      return { ...item, estado };
    });
  }
}
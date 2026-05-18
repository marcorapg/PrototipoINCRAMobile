import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface TimelineItem {
  pendente: boolean;
  data: string;
  acao: string;
  descricao: string;
}

@Component({
  selector: 'app-linhatempo',
  imports: [CommonModule],
  templateUrl: './linhatempo.html',
  styleUrl: './linhatempo.css',
})
export class Linhatempo {
  @Input() itens: TimelineItem[] = [];
}

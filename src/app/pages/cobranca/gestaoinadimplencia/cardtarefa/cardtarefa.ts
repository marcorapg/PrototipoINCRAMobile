import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cardtarefa',
  imports: [CommonModule],
  templateUrl: './cardtarefa.html',
  styleUrl: './cardtarefa.css',
})
export class Cardtarefa {
  @Input() titulo!: string;
  @Input() passo!: number;
  @Input() total!: number;

  @Input() ativo = false;
  @Input() concluido = false;

  @Output() concluir = new EventEmitter<void>();
  @Output() ativado = new EventEmitter<void>();
  @Output() desativado = new EventEmitter<void>();

  onConcluir() {
    this.concluir.emit();
  }

  onAtivar() {
    this.ativado.emit();
  }

  onDesativar() {
    this.desativado.emit();
  }
}
import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pageheader } from '../../../../componentes/pageheader/pageheader';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrScrim } from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-revisar',
  imports: [RouterLink, Pageheader, CommonModule, FormsModule, BrScrim],
  templateUrl: './revisar.html',
  styleUrl: './revisar.css',
})
export class Revisar implements AfterViewInit {
  aceitouDeclaracao = false;

  ngAfterViewInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Variável que controla o estado de exibição
  scrimSucesso = false;
  abrirScrimSucesso() {
    this.scrimSucesso = true;
  }
  fecharScrimSucesso() {
    this.scrimSucesso = false;
  }

  finalizar(): void {
    this.abrirScrimSucesso();
  }
}

import { AfterViewInit, Component } from '@angular/core';
import { Pageheader } from '../../../componentes/pageheader/pageheader';
import { RouterLink } from '@angular/router';
import { BrScrim } from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-preencherautosupervisao',
  imports: [Pageheader, RouterLink],
  templateUrl: './preencherautosupervisao.html',
  styleUrl: './preencherautosupervisao.css',
})
export class Preencherautosupervisao implements AfterViewInit {
  ngAfterViewInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  quantidadeMoradia = Math.floor(Math.random() * 2);
  quantidadeAnimal = Math.floor(Math.random() * 2);
  quantidadePlanta = Math.floor(Math.random() * 2);
  quantidadeBenfeitoria = Math.floor(Math.random() * 2);
  quantidadeDocumentos = Math.floor(Math.random() * 2);

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

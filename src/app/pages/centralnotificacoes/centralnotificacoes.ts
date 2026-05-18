import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrCard } from '@govbr-ds/webcomponents-angular/standalone';
import { Breadcrumb } from '../../componentes/breadcrumb/breadcrumb';

@Component({
  selector: 'app-centralnotificacoes',
  imports: [BrCard, RouterLink, Breadcrumb],
  templateUrl: './centralnotificacoes.html',
  styleUrl: './centralnotificacoes.css',
})
export class Centralnotificacoes {

}

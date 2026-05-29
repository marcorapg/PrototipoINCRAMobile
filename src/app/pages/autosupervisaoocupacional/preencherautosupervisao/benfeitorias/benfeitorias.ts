import { AfterViewInit, Component } from '@angular/core';
import { Pageheader } from '../../../../componentes/pageheader/pageheader';
import { BrInput, BrSelect } from '@govbr-ds/webcomponents-angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Gridfotos } from '../../../../componentes/gridfotos/gridfotos';

@Component({
  selector: 'app-benfeitorias',
  imports: [Pageheader, CommonModule, FormsModule, Gridfotos],
  templateUrl: './benfeitorias.html',
  styleUrl: './benfeitorias.css',
})

export class Benfeitorias implements AfterViewInit {

  benfeitorias = [
    {
      id: 1,
      titulo: 'Casa',
      imagem: 'assets/images/benfeitorias-grid-casa.png'
    },
    {
      id: 2,
      titulo: 'Curral',
      imagem: 'assets/images/benfeitorias-grid-curral.png'
    },
    {
      id: 3,
      titulo: 'Galinheiro',
      imagem: 'assets/images/benfeitorias-grid-galinheiro.png'
    },
    {
      id: 4,
      titulo: 'Chiqueiro',
      imagem: 'assets/images/benfeitorias-grid-chiqueiro.png'
    },
    {
      id: 5,
      titulo: 'Cerca',
      imagem: 'assets/images/benfeitorias-grid-cerca.png'
    },
    {
      id: 6,
      titulo: 'Poço',
      imagem: 'assets/images/benfeitorias-grid-poco.png'
    },
    {
      id: 7,
      titulo: 'Açude',
      imagem: 'assets/images/benfeitorias-grid-acude.png'
    },
    {
      id: 8,
      titulo: 'Estufa',
      imagem: 'assets/images/benfeitorias-grid-estufa.png'
    },
    {
      id: 9,
      titulo: 'Depósito',
      imagem: 'assets/images/benfeitorias-grid-deposito.png'
    },
    {
      id: 10,
      titulo: 'Paiol',
      imagem: 'assets/images/benfeitorias-grid-paiol.png'
    },
    {
      id: 11,
      titulo: 'Outros',
      imagem: 'assets/images/benfeitorias-grid-outros.png',
      isOutros: true
    }
  ];

  ngAfterViewInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
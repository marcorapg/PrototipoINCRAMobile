import { AfterViewInit, Component } from '@angular/core';
import { Pageheader } from '../../../../componentes/pageheader/pageheader';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Gridfotos } from '../../../../componentes/gridfotos/gridfotos';


@Component({
  selector: 'app-producaoanimal',
  imports: [Pageheader, CommonModule, FormsModule, Gridfotos],
  templateUrl: './producaoanimal.html',
  styleUrl: './producaoanimal.css',
})
export class Producaoanimal implements AfterViewInit {

  // componente pai

  animais = [
    {
      id: 1,
      titulo: 'Boi/Vaca',
      imagem: 'assets/images/animais-grid-bovinos.png'
    },
    {
      id: 2,
      titulo: 'Porco',
      imagem: 'assets/images/animais-grid-suinos.png'
    },
    {
      id: 3,
      titulo: 'Galinha/Peru',
      imagem: 'assets/images/animais-grid-aves.png'
    },
    {
      id: 4,
      titulo: 'Ovelha',
      imagem: 'assets/images/animais-grid-ovinos.png'
    },
    {
      id: 5,
      titulo: 'Cabra',
      imagem: 'assets/images/animais-grid-caprinos.png'
    },
    {
      id: 6,
      titulo: 'Abelhas',
      imagem: 'assets/images/animais-grid-abelhas.png'
    },
    {
      id: 7,
      titulo: 'Peixe',
      imagem: 'assets/images/animais-grid-peixes.png'
    },
    {
      id: 8,
      titulo: 'Coelhos',
      imagem: 'assets/images/animais-grid-coelhos.png'
    },
    {
      id: 9,
      titulo: 'Cavalos',
      imagem: 'assets/images/animais-grid-cavalos.png'
    },
    {
      id: 10,
      titulo: 'Patos',
      imagem: 'assets/images/animais-grid-patos.png'
    },
    {
      id: 11,
      titulo: 'Outros',
      imagem: 'assets/images/animais-grid-outros.png',
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

import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { Pageheader } from '../../../../componentes/pageheader/pageheader';
import { FormsModule } from '@angular/forms';
import { Gridfotos } from '../../../../componentes/gridfotos/gridfotos';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-producaoagricola',
  imports: [Pageheader, Gridfotos, CommonModule, FormsModule],
  templateUrl: './producaoagricola.html',
  styleUrl: './producaoagricola.css',
})
export class Producaoagricola implements AfterViewInit {

  plantas = [
    {
      id: 1,
      titulo: 'Mandioca',
      imagem: 'assets/images/plantas-grid-mandioca.png'
    },
    {
      id: 2,
      titulo: 'Milho',
      imagem: 'assets/images/plantas-grid-milho.png'
    },
    {
      id: 3,
      titulo: 'Cana-de-açucar',
      imagem: 'assets/images/plantas-grid-cana.png'
    },
    {
      id: 4,
      titulo: 'Banana',
      imagem: 'assets/images/plantas-grid-banana.png'
    },
    {
      id: 5,
      titulo: 'Feijão',
      imagem: 'assets/images/plantas-grid-feijao.png'
    },
    {
      id: 6,
      titulo: 'Café',
      imagem: 'assets/images/plantas-grid-cafe.png'
    },
    {
      id: 7,
      titulo: 'Arroz',
      imagem: 'assets/images/plantas-grid-arroz.png'
    },
    {
      id: 8,
      titulo: 'Abóbora',
      imagem: 'assets/images/plantas-grid-abobora.png'
    },
    {
      id: 9,
      titulo: 'Hortaliças',
      imagem: 'assets/images/plantas-grid-hortalicas.png'
    },
    {
      id: 10,
      titulo: 'Maracujá',
      imagem: 'assets/images/plantas-grid-maracuja.png'
    },
    {
      id: 11,
      titulo: 'Outros',
      imagem: 'assets/images/plantas-grid-outros.png',
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
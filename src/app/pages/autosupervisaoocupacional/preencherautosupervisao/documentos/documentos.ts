import { AfterViewInit, Component } from '@angular/core';
import { Pageheader } from '../../../../componentes/pageheader/pageheader';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Gridfotos } from '../../../../componentes/gridfotos/gridfotos';

@Component({
  selector: 'app-documentos',
  imports: [Pageheader, Gridfotos, CommonModule, FormsModule],
  templateUrl: './documentos.html',
  styleUrl: './documentos.css',
})
export class Documentos implements AfterViewInit {
  documentos = [
    {
      id: 1,
      titulo: 'Nota Fiscal',
      imagem: 'assets/images/documentos-grid-notafiscal.png'
    },
    {
      id: 2,
      titulo: 'Comprovante de Residência',
      imagem: 'assets/images/documentos-grid-comprovanteresidencia.png'
    },
    {
      id: 3,
      titulo: 'Outros',
      imagem: 'assets/images/documentos-grid-outros.png',
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

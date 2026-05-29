import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

declare const core: any;

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {
  @ViewChild('carousel')
  carousel!: ElementRef;

  principaisServicos = [
    {
      titulo: 'Solicitar Regularização',
      icone: 'fas fa-map-marked-alt',
      url: '/regularizacaoassistida'
    },
    {
      titulo: 'Autossupervisão Ocupacional',
      icone: 'fas fa-eye',
      url: '/autosupervisaoocupacional'
    },
    {
      titulo: 'Caixa Postal',
      icone: 'fas fa-envelope',
      url: '/caixa-postal'
    },
    {
      titulo: 'Resolver Pendências',
      icone: 'fas fa-exclamation-circle',
      url: '/resolver-pendencias'
    },
    {
      titulo: 'Acompanhamento de Serviços',
      icone: 'fas fa-location-arrow',
      url: '/acompanhamento-servicos'
    },
    {
      titulo: 'Regularização de Ocupantes',
      icone: 'fas fa-users',
      url: '/regularizacao-ocupantes'
    }
  ];

  scrollCarousel(direction: 'left' | 'right'): void {

    const scrollAmount = 180;

    this.carousel.nativeElement.scrollBy({
      left: direction === 'right'
        ? scrollAmount
        : -scrollAmount,
      behavior: 'smooth'
    });

  }

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Pageheader } from '../../../componentes/pageheader/pageheader';

@Component({
  selector: 'app-servicos',
  imports: [FormsModule, CommonModule, RouterLink, Pageheader],
  templateUrl: './servicos.html',
  styleUrl: './servicos.css',
})
export class Servicos {
  serviceCards = [
    {
      title: 'Solicitar Regularização',
      icon: 'fas fa-map-marked-alt',
      url: '/regularizacaoassistida/'
    },
    {
      title: 'Autossupervisão Ocupacional',
      icon: 'fas fa-eye',
      url: '/autosupervisaoocupacional/'
    },
    {
      title: 'Caixa Postal',
      icon: 'fas fa-bell',
      url: ''
    },
    {
      title: 'Resolver Pendências',
      icon: 'fas fa-calendar-check',
      url: ''
    },
    {
      title: 'Acompanhamento de Serviços',
      icon: 'fas fa-map-marker-alt',
      url: ''
    },
    {
      title: 'Regularização de Ocupantes',
      icon: 'fas fa-users',
      url: ''
    }
  ];
}

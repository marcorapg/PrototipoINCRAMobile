import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  serviceCards = [
    {
      title: 'Regularização Assistida',
      icon: 'fas fa-map-marked-alt'
    },
    {
      title: 'Autossupervisão Ocupacional',
      icon: 'fas fa-eye'
    },
    {
      title: 'Caixa Postal',
      icon: 'fas fa-bell'
    },
    {
      title: 'Resolver Pendências',
      icon: 'fas fa-calendar-check'
    },
    {
      title: 'Acompanhamento de Serviços',
      icon: 'fas fa-map-marker-alt'
    },
    {
      title: 'Regularização de Ocupantes',
      icon: 'fas fa-users'
    }
  ];

}

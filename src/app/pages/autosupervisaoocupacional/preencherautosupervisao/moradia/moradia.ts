import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BrSelect } from '@govbr-ds/webcomponents-angular/standalone';
import { Pageheader } from '../../../../componentes/pageheader/pageheader';


@Component({
  selector: 'app-moradia',
  imports: [Pageheader, CommonModule, FormsModule, RouterLink],
  templateUrl: './moradia.html',
  styleUrl: './moradia.css',
})

export class Moradia implements AfterViewInit {

  esconderFotoMoradia = true;

  possuiMoradia = false;

  descricao = '';

  tipoConstrutivoOptions = [
    {
      label: 'Alvenaria',
      value: 'alvenaria',
      selected: false
    },
    {
      label: 'Madeira',
      value: 'madeira',
      selected: false
    },
    {
      label: 'Mista',
      value: 'mista',
      selected: false
    },
    {
      label: 'Taipa',
      value: 'taipa',
      selected: false
    }
  ];

  ngAfterViewInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
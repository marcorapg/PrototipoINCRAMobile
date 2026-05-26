import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrSelect } from '@govbr-ds/webcomponents-angular/standalone';
import { Pageheader } from '../../../../componentes/pageheader/pageheader';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producaoagricola',
  imports: [Pageheader, RouterLink, BrSelect, CommonModule, FormsModule],
  templateUrl: './producaoagricola.html',
  styleUrl: './producaoagricola.css',
})
export class Producaoagricola implements AfterViewInit {

  tipoCulturaSelecionado = '';

  descricao = '';

  areaUtilizada: number | null = null;

  itensProducao: any[] = [];

  tipoCulturaAgricolaOptions = [
    {
      label: 'Milho',
      value: 'Milho',
      selected: false
    },
    {
      label: 'Soja',
      value: 'Soja',
      selected: false
    },
    {
      label: 'Tomate',
      value: 'Tomate',
      selected: false
    },
    {
      label: 'Café',
      value: 'Café',
      selected: false
    },
    {
      label: 'Feijão',
      value: 'Feijão',
      selected: false
    },
    {
      label: 'Cana-de-açúcar',
      value: 'Cana-de-açúcar',
      selected: false
    },
    {
      label: 'Alface',
      value: 'Alface',
      selected: false
    },
    {
      label: 'Batata',
      value: 'Batata',
      selected: false
    }
  ];

  ngAfterViewInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  onTipoCulturaChange(event: any): void {
    this.tipoCulturaSelecionado =
      event.target.value;
  }

  get formularioValido(): boolean {

    return (
      this.tipoCulturaSelecionado.trim() !== '' &&
      this.descricao.trim() !== '' &&
      this.areaUtilizada !== null &&
      this.areaUtilizada > 0
    );

  }

  salvarItem(): void {

    if (!this.formularioValido) {
      return;
    }

    this.itensProducao.push({
      tipo: this.tipoCulturaSelecionado,
      descricao: this.descricao,
      area: this.areaUtilizada
    });

    this.tipoCulturaSelecionado = '';
    this.descricao = '';
    this.areaUtilizada = null;

  }

  removerItem(index: number): void {

    this.itensProducao.splice(index, 1);

  }
}

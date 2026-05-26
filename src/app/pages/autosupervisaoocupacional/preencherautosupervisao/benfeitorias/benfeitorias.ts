import { AfterViewInit, Component } from '@angular/core';
import { Pageheader } from '../../../../componentes/pageheader/pageheader';
import { BrInput, BrSelect } from '@govbr-ds/webcomponents-angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-benfeitorias',
  imports: [Pageheader, BrSelect, CommonModule, FormsModule, RouterLink],
  templateUrl: './benfeitorias.html',
  styleUrl: './benfeitorias.css',
})

export class Benfeitorias implements AfterViewInit {

  tipoBenfeitoriaSelecionado = '';

  descricao = '';

  itensBenfeitorias: any[] = [];

  tipoBenfeitoriaOptions = [
    {
      label: 'Curral',
      value: 'Curral',
      selected: false
    },
    {
      label: 'Galpão',
      value: 'Galpão',
      selected: false
    },
    {
      label: 'Cisterna',
      value: 'Cisterna',
      selected: false
    },
    {
      label: 'Cerca',
      value: 'Cerca',
      selected: false
    },
    {
      label: 'Poço Artesiano',
      value: 'Poço Artesiano',
      selected: false
    },
    {
      label: 'Silo',
      value: 'Silo',
      selected: false
    },
    {
      label: 'Estábulo',
      value: 'Estábulo',
      selected: false
    },
    {
      label: 'Barracão',
      value: 'Barracão',
      selected: false
    }
  ];

  ngAfterViewInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  onTipoBenfeitoriaChange(event: any): void {

    this.tipoBenfeitoriaSelecionado =
      event.target.value;

  }

  get formularioValido(): boolean {

    return (
      this.tipoBenfeitoriaSelecionado.trim() !== '' &&
      this.descricao.trim() !== ''
    );

  }

  salvarItem(): void {

    if (!this.formularioValido) {
      return;
    }

    this.itensBenfeitorias.push({
      tipo: this.tipoBenfeitoriaSelecionado,
      descricao: this.descricao
    });

    this.tipoBenfeitoriaSelecionado = '';
    this.descricao = '';

  }

  removerItem(index: number): void {

    this.itensBenfeitorias.splice(index, 1);

  }
}

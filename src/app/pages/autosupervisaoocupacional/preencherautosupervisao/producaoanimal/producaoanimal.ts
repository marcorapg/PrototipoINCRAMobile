import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrSelect } from '@govbr-ds/webcomponents-angular/standalone';
import { Pageheader } from '../../../../componentes/pageheader/pageheader';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-producaoanimal',
  imports: [RouterLink, BrSelect, Pageheader, CommonModule, FormsModule],
  templateUrl: './producaoanimal.html',
  styleUrl: './producaoanimal.css',
})
export class Producaoanimal implements AfterViewInit {

  tipoProducaoAnimalSelecionado = '';

  descricao = '';

  numeroAnimais: number | null = null;

  itensProducaoAnimal: any[] = [];

  tipoProducaoAnimalOptions = [
    {
      label: 'Bovinos',
      value: 'Bovinos',
      selected: false
    },
    {
      label: 'Suínos',
      value: 'Suínos',
      selected: false
    },
    {
      label: 'Ovinos',
      value: 'Ovinos',
      selected: false
    },
    {
      label: 'Caprinos',
      value: 'Caprinos',
      selected: false
    },
    {
      label: 'Aves',
      value: 'Aves',
      selected: false
    },
    {
      label: 'Equinos',
      value: 'Equinos',
      selected: false
    },
    {
      label: 'Piscicultura',
      value: 'Piscicultura',
      selected: false
    },
    {
      label: 'Apicultura',
      value: 'Apicultura',
      selected: false
    }
  ];

  ngAfterViewInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  onTipoProducaoAnimalChange(event: any): void {

    this.tipoProducaoAnimalSelecionado =
      event.target.value;

  }

  get formularioValido(): boolean {

    return (
      this.tipoProducaoAnimalSelecionado.trim() !== '' &&
      this.descricao.trim() !== '' &&
      this.numeroAnimais !== null &&
      this.numeroAnimais > 0
    );

  }

  salvarItem(): void {

    if (!this.formularioValido) {
      return;
    }

    this.itensProducaoAnimal.push({
      tipo: this.tipoProducaoAnimalSelecionado,
      descricao: this.descricao,
      quantidade: this.numeroAnimais
    });

    this.tipoProducaoAnimalSelecionado = '';
    this.descricao = '';
    this.numeroAnimais = null;

  }

  removerItem(index: number): void {

    this.itensProducaoAnimal.splice(index, 1);

  }
}

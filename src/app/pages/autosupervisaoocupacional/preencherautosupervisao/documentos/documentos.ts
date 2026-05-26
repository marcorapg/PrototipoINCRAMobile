import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pageheader } from '../../../../componentes/pageheader/pageheader';
import { BrSelect } from '@govbr-ds/webcomponents-angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-documentos',
  imports: [RouterLink, Pageheader, BrSelect, CommonModule, FormsModule],
  templateUrl: './documentos.html',
  styleUrl: './documentos.css',
})
export class Documentos implements AfterViewInit {

  tipoDocumentoSelecionado = '';

  descricao = '';

  itensDocumentos: any[] = [];

  tipoDocumentoOptions = [
    {
      label: 'RG',
      value: 'RG',
      selected: false
    },
    {
      label: 'CPF',
      value: 'CPF',
      selected: false
    },
    {
      label: 'Comprovante de residência',
      value: 'Comprovante de residência',
      selected: false
    },
    {
      label: 'Contrato de posse',
      value: 'Contrato de posse',
      selected: false
    },
    {
      label: 'Escritura',
      value: 'Escritura',
      selected: false
    },
    {
      label: 'Certidão',
      value: 'Certidão',
      selected: false
    },
    {
      label: 'Cadastro Ambiental Rural',
      value: 'Cadastro Ambiental Rural',
      selected: false
    },
    {
      label: 'Outros',
      value: 'Outros',
      selected: false
    }
  ];

  ngAfterViewInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  onTipoDocumentoChange(event: any): void {

    this.tipoDocumentoSelecionado =
      event.target.value;

  }

  get formularioValido(): boolean {

    return (
      this.tipoDocumentoSelecionado.trim() !== '' &&
      this.descricao.trim() !== ''
    );

  }

  salvarItem(): void {

    if (!this.formularioValido) {
      return;
    }

    this.itensDocumentos.push({
      tipo: this.tipoDocumentoSelecionado,
      descricao: this.descricao
    });

    this.tipoDocumentoSelecionado = '';
    this.descricao = '';

  }

  removerItem(index: number): void {

    this.itensDocumentos.splice(index, 1);

  }
}

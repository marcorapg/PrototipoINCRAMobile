import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrRadio } from '@govbr-ds/webcomponents-angular/standalone';

export interface UploadGridItem {
  id: number;
  titulo: string;
  imagem: string;
  concluido?: boolean;
  arquivo?: File | null;
  previewImagem?: string | null;
  isOutros?: boolean;
  numeroCabecas?: string;
  tipoUnidade?: string;
  areaPlantada?: string;
}

@Component({
  selector: 'app-gridfotos',
  imports: [CommonModule, FormsModule, BrRadio],
  templateUrl: './gridfotos.html',
  styleUrl: './gridfotos.css',
})

export class Gridfotos {
  @Input()
  titulo = 'Produção Animal';

  @Input()
  descricao = 'Selecione um item da lista';

  @Input()
  itens: UploadGridItem[] = [];

  @Input()
  isAnimal: boolean = false;

  @Input()
  isPlanta: boolean = false;

  telaAtual: 'lista' | 'upload' = 'lista';

  itemSelecionado!: UploadGridItem;

  arquivoSelecionado: File | null = null;

  previewImagem: string | null = null;

  nomeOutroItem = '';

  numeroCabecas? = '';

  tipoUnidadeLocal: string = 'pes';

  areaPlantada? = '';

  abrirTelaUpload(item: UploadGridItem): void {

    this.itemSelecionado = item;

    this.arquivoSelecionado =
      item.arquivo || null;

    this.previewImagem =
      item.previewImagem || null;

    this.nomeOutroItem =
      item.isOutros
        ? ''
        : item.titulo;

    this.numeroCabecas = this.isAnimal
      ? item.numeroCabecas
      : '';

    this.tipoUnidadeLocal = this.isPlanta
      ? (item.tipoUnidade ?? 'pes')
      : 'pes';

    this.areaPlantada = this.isPlanta
      ? item.areaPlantada
      : '';

    this.telaAtual = 'upload';

  }

  selecionarArquivo(event: any): void {

    const arquivo =
      event.target.files[0];

    if (!arquivo) {
      return;
    }

    this.arquivoSelecionado =
      arquivo;

    this.previewImagem =
      URL.createObjectURL(arquivo);

  }

  salvarArquivo(): void {

    if (!this.arquivoSelecionado) {
      return;
    }

    // ITEM OUTROS
    if (this.itemSelecionado.isOutros) {

      if (this.nomeOutroItem.trim() === '') {
        return;
      }

      const novoItem: UploadGridItem = {

        id: new Date().getTime(),

        titulo: this.nomeOutroItem,

        imagem: this.itemSelecionado.imagem,

        concluido: true,

        arquivo: this.arquivoSelecionado,

        previewImagem: this.previewImagem,

        tipoUnidade: this.tipoUnidadeLocal

      };

      // remove temporariamente o outros
      this.itens =
        this.itens.filter(x => !x.isOutros);

      // adiciona novo item
      this.itens.push(novoItem);

      // adiciona novamente o card Outros
      this.itens.push({
        id: 999999,
        titulo: 'Outros',
        imagem: this.itemSelecionado.imagem,
        isOutros: true
      });

    } else {

      this.itemSelecionado.arquivo =
        this.arquivoSelecionado;

      this.itemSelecionado.previewImagem =
        this.previewImagem;

      this.itemSelecionado.concluido =
        true;

      this.itemSelecionado.numeroCabecas = this.numeroCabecas;

      this.itemSelecionado.tipoUnidade = this.tipoUnidadeLocal;

      this.itemSelecionado.areaPlantada = this.areaPlantada;
    }

    this.resetarTela();

  }

  voltarLista(): void {

    this.resetarTela();

  }

  resetarTela(): void {

    this.arquivoSelecionado = null;

    this.previewImagem = null;

    this.nomeOutroItem = '';

    this.telaAtual = 'lista';

    this.numeroCabecas = '';

    this.tipoUnidadeLocal = 'pes';

    this.areaPlantada = '';

  }

  onEstadoChangePes(event: any): void {
    if (event.detail)
      this.tipoUnidadeLocal = 'pes';
  }

  onEstadoChangeHectares(event: any): void {
    if (event.detail)
      this.tipoUnidadeLocal = 'hectares';
  }
}

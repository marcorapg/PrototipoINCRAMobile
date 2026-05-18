import { AfterViewInit, Component } from '@angular/core';

declare const core: any;

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
  estadoSelecionado: string = "";

  estados = [
    { label: 'Acre', value: 'AC' },
    { label: 'Alagoas', value: 'AL' },
    { label: 'Amapá', value: 'AP' },
    { label: 'Amazonas', value: 'AM' },
    { label: 'Bahia', value: 'BA' },
    { label: 'Minas Gerais', value: 'MG' },
    { label: 'São Paulo', value: 'SP' }
  ]
}

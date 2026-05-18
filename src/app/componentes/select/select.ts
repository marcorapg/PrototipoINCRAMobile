import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, AfterViewInit, ElementRef } from '@angular/core'

declare const core: any;

export interface SelectOption {
  label: string
  value: string
}

@Component({
  selector: 'app-select',
  imports: [CommonModule],
  templateUrl: './select.html',
  styleUrl: './select.css',
})

export class Select implements AfterViewInit {
  @Input() label = ''
  @Input() placeholder = 'Selecione'
  @Input() options: any[] = []

  id = 'select-' + Math.random().toString(36).substring(2)

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {

    const itemList = []
    for (const brItem of window.document.querySelectorAll('.br-item')) {
      itemList.push(new core.BRItem('br-item', brItem))
    }

    const listList = []
    for (const brList of window.document.querySelectorAll(('.br-list'))) {
      listList.push(new core.BRList('br-list', brList))
    }

    const selectList = []
    const notFoundElement = `
        <div class="br-item not-found">
          <div class="container">
          <div class="row">
            <div class="col">
            <p><strong>Ops!</strong> Não encontramos o que você está procurando!</p>
            </div>
          </div>
          </div>
        </div>
        `
    for (const brSelect of window.document.querySelectorAll('.br-select')) {
      const brselect = new core.BRSelect('br-select', brSelect, notFoundElement)
      //Exemplo de uso de listener do select
      brSelect.addEventListener('onChange', function (e) { })
      selectList.push(brselect)
    }

  }
}

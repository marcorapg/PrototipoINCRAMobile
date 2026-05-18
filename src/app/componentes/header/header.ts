import { AfterViewInit, Component } from '@angular/core';

declare const core: any;

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header implements AfterViewInit {
  ngAfterViewInit(): void {
    const header = document.querySelector('.br-header');
    if (header) new core.BRHeader('br-header', header);

    const menu = document.querySelector('.br-menu');
    if (menu) new core.BRMenu('br-menu', menu);    
  }
}
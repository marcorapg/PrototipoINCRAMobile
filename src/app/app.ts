import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrButton, BrHeader, BrIcon, BrInput, BrSignIn } from '@govbr-ds/webcomponents-angular/standalone';

declare const core: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, BrHeader, BrIcon, BrButton, BrSignIn, BrInput, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('prototipoincramobile');

  selectedMenu = 'Favorites';

  menuItems = [
    {
      label: 'Início',
      icon: 'fas fa-home'
    },
    {
      label: 'Caixa Postal',
      icon: 'fas fa-bell'
    },
    {
      label: 'Perfil',
      icon: 'fas fa-user'
    },
    {
      label: 'Menu',
      icon: 'fas fa-list'
    }
  ];

  selectMenu(menu: string, event: Event) {
    this.selectedMenu = menu;
    if(menu == 'Menu'){
      this.toggleMenu();
      event.preventDefault();
    }

  }

  isMenuOpen = false;

  sideMenuItems = [
    {
      title: 'Página Inicial',
      icon: 'fas fa-house',
      url: '/'
    },
    {
      title: 'Caixa Postal',
      icon: 'fas fa-bell'
    },
    {
      title: 'Serviços',
      icon: 'fas fa-briefcase',
      url: '/servicos'
    },
    {
      title: 'Perfil',
      icon: 'fas fa-user'
    },
    {
      title: 'Sair',
      icon: 'fas fa-right-from-bracket'
    }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
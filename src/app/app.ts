import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WebcomponentsAngularModule } from '@govbr-ds/webcomponents-angular';
import { CommonModule } from '@angular/common';

declare const core: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, WebcomponentsAngularModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('prototipoincramobile');

  selectedMenu = 'Favorites';

  menuItems = [
    {
      label: 'Favorites',
      icon: 'fas fa-heart'
    },
    {
      label: 'Search',
      icon: 'fas fa-search'
    },
    {
      label: 'Information',
      icon: 'fas fa-circle-exclamation'
    },
    {
      label: 'Notification',
      icon: 'fas fa-bell'
    }
  ];

  selectMenu(menu: string) {
    this.selectedMenu = menu;
  }
}
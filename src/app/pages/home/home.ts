import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrHeader, BrIcon, BrButton, BrSignIn, BrInput, BrHeaderLogo } from '@govbr-ds/webcomponents-angular/standalone';

declare const core: any;

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, BrHeader, BrIcon, BrButton, BrSignIn, BrInput, BrHeaderLogo],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {


}

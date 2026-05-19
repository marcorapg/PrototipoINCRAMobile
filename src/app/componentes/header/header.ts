import { Component } from '@angular/core';
import { BrButton, BrHeader, BrHeaderFunction, BrHeaderLink, BrHeaderList, BrHeaderLogo, BrIcon, BrInput, BrSignIn } from '@govbr-ds/webcomponents-angular/standalone';

declare const core: any;

@Component({
  selector: 'app-header',
  imports: [BrHeader, BrIcon, BrButton, BrSignIn, BrInput, BrHeaderLogo],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header {

}
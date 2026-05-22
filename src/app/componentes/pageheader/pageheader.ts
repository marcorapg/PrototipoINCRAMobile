import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pageheader',
  imports: [RouterModule],
  templateUrl: './pageheader.html',
  styleUrl: './pageheader.css',
})
export class Pageheader {
  @Input() title: string = '';

  @Input() backLink: string = '/';
}

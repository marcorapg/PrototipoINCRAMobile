import { Component } from '@angular/core';
import { Breadcrumb } from '../../../../componentes/breadcrumb/breadcrumb';
import { BrTab, BrTabItem } from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-painelgerencial',
  imports: [Breadcrumb, BrTab, BrTabItem],
  templateUrl: './painelgerencial.html',
  styleUrl: './painelgerencial.css',
})
export class Painelgerencial {

}

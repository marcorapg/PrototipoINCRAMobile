import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit, TemplateRef, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface GovbrColumn {
  field: string;
  header: string;
  sortable?: boolean;
  cellTemplate?: TemplateRef<any>;
  center?: boolean;
}

export interface GovbrTableAction {
  id?: string,
  icon: string;
  tooltip?: string;
  action: (row: any) => void;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table implements OnInit, OnChanges {

  @Input() columns: GovbrColumn[] = [];
  @Input() data: any[] = [];
  @Input() pageSize = 10;

  @Input() actions: GovbrTableAction[] = [];

  @Output() rowClick = new EventEmitter<any>();

  filteredData: any[] = [];
  pagedData: any[] = [];

  searchTerm = '';

  sortField = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  currentPage = 1;
  totalPages = 1;

  ngOnInit() {
    this.filteredData = [...this.data];
    this.updateTable();
  }

  updateTable() {

    this.totalPages = Math.ceil(this.filteredData.length / this.pageSize);

    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;

    this.pagedData = this.filteredData.slice(start, end);
  }

  search() {

    const term = this.searchTerm.toLowerCase();

    this.filteredData = this.data.filter(row =>
      Object.values(row).some(v =>
        String(v).toLowerCase().includes(term)
      )
    );

    this.currentPage = 1;

    this.updateTable();
  }

  changePage(page: number) {
    this.currentPage = page;
    this.updateTable();
  }

  next() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateTable();
    }
  }

  prev() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateTable();
    }
  }

  executeAction(action: GovbrTableAction, row: any) {
    action.action(row);
  }

  get pages(): number[] {

    const range = 2;

    const start = Math.max(1, this.currentPage - range);
    const end = Math.min(this.totalPages, this.currentPage + range);

    const pages: number[] = [];

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }

  sort(column: GovbrColumn) {

    if (!column.sortable) return;

    if (this.sortField === column.field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = column.field;
      this.sortDirection = 'asc';
    }

    this.filteredData.sort((a, b) => {

      const v1 = a[column.field];
      const v2 = b[column.field];

      if (v1 == null) return -1;
      if (v2 == null) return 1;

      if (v1 < v2) return this.sortDirection === 'asc' ? -1 : 1;
      if (v1 > v2) return this.sortDirection === 'asc' ? 1 : -1;

      return 0;

    });

    this.updateTable();
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['data'] || changes['columns']) {

      this.filteredData = [...this.data];
      this.updateTable();

    }

  }
}
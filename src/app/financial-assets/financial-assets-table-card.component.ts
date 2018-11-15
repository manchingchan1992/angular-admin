import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { FinancialAssetsDataSource } from './financial-assets-datasource';

@Component({
  selector: 'financial-assets-table-card',
  templateUrl: './financial-assets-table-card.component.html',
  styleUrls: ['./financial-assets-table-card.component.css'],
})
export class FinancialAssetsTableCardComponent implements OnInit {
  @Input() hero
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: FinancialAssetsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new FinancialAssetsDataSource(this.paginator, this.sort);
  }
}

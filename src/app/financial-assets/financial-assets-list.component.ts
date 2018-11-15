import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { FinancialAssetsDataSource } from './financial-assets-datasource';

@Component({
  selector: 'financial-assets-list',
  templateUrl: './financial-assets-list.component.html',
  styleUrls: ['./financial-assets-list.component.css'],
})
export class FinancialAssetsListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: FinancialAssetsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new FinancialAssetsDataSource(this.paginator, this.sort);
  }
}

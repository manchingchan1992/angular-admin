import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TreeComponent } from './tree/tree.component';
import { TableComponent } from './table/table.component';
const routes: Routes = [
  { path: '', redirectTo: '/apps/dashboard', pathMatch: 'full' },
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'apps/dashboard',
        component: DashboardComponent
      },
      {
        path: 'apps/tree',
        component: TreeComponent
      },
      {
        path: 'apps/table',
        component: TableComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

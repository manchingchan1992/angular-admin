import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TreeComponent } from './tree/tree.component';

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

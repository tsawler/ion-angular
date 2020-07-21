import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HostPage } from './host.page';

const routes: Routes = [
  {
    path: '',
    component: HostPage
  },
  {
    path: 'service-details',
    loadChildren: () => import('./service-details/service-details.module').then( m => m.ServiceDetailsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HostPageRoutingModule {}

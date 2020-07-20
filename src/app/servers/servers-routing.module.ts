import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServersPage } from './servers.page';

const routes: Routes = [
  {
    path: '',
    component: ServersPage
  },
  {
    path: 'host-service',
    loadChildren: () => import('./host-service/host-service.module').then( m => m.HostServicePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServersPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProblemsPage } from './problems.page';
import {DowntimesPage} from './downtimes/downtimes.page';
import {HostServicesPage} from './host-services/host-services.page';
import {HostsPage} from './hosts/hosts.page';

const routes: Routes = [
  {
    path: '',
    component: ProblemsPage,
    children: [
      // {path: 'problems-tab', redirectTo: '/', pathMatch: 'full'},
      // {path: 'downtimes-tab', component: DowntimesPage},
      // {path: 'host-services-tab', component: HostServicesPage},
      // {path: 'hosts-tab', component: HostsPage},
    ]
  },
  {
    path: 'host-services-tab',
    loadChildren: () => import('./host-services/host-services.module').then( m => m.HostServicesPageModule)
  },
  {
    path: 'downtimes-tab',
    loadChildren: () => import('./downtimes/downtimes.module').then( m => m.DowntimesPageModule)
  },
  {
    path: 'hosts-tab',
    loadChildren: () => import('./hosts/hosts.module').then( m => m.HostsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProblemsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HostServicesPage } from './host-services.page';

const routes: Routes = [
  {
    path: '',
    component: HostServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HostServicesPageRoutingModule {}


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DowntimesPage } from './downtimes.page';

const routes: Routes = [
  {
    path: '',
    component: DowntimesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DowntimesPageRoutingModule {}

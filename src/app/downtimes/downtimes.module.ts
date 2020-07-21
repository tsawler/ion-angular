import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DowntimesPageRoutingModule } from './downtimes-routing.module';

import { DowntimesPage } from './downtimes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DowntimesPageRoutingModule
  ],
  declarations: [DowntimesPage]
})
export class DowntimesPageModule {}

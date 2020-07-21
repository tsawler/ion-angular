import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HostServicesPageRoutingModule } from './host-services-routing.module';

import { HostServicesPage } from './host-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HostServicesPageRoutingModule
  ],
  declarations: [HostServicesPage]
})
export class HostServicesPageModule {}

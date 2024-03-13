import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipmentRoutingModule } from './shipment-routing.module';
import { ShipmentListComponent } from './shipment-list/shipment-list.component';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';



@NgModule({
  declarations: [
    
  
    ShipmentListComponent,
            ShipmentDetailsComponent
  ],
  imports: [
    CommonModule,
    ShipmentRoutingModule
  ]
})
export class ShipmentModule { }

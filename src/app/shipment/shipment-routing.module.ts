import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipmentListComponent } from './shipment-list/shipment-list.component';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';

const routes: Routes = [
  { path: 'results', component: ShipmentListComponent },
  { path: 'details/:id', component: ShipmentDetailsComponent } // Dynamic route for details
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipmentRoutingModule { }

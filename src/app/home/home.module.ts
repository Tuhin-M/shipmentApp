import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ShipmentSearchComponent } from './shipment-search/shipment-search.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ShipmentSearchComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }

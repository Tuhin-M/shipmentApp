import { Injectable } from '@angular/core';
import shipmentDetails from '../assets/mock-shipment-details.json';
import shipmentList from '../assets/mock-shipment-list.json';

import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  constructor() { }

  getShipments(): Observable<any> {
    return of(shipmentList.Shipments.Shipment);
  }

  searchShipments(criteria: any): Observable<any[]> {
    let results = shipmentDetails.Shipment;
    const filteredShipments = results.filter(shipment => {
      let matches = true;
      for (const key in criteria) {
        if (criteria[key] !== '' && shipment[key]?.toLowerCase() !== criteria[key].toLowerCase()) {
          matches = false;
          break;
        }
      }
      return matches;
    });

    return of(filteredShipments);
  }
  getShipmentDetails(shipmentNo): Observable<any> {
    let results = [shipmentDetails.Shipment];
    var details = {};
    // This would actually be a search within the shipmentList, but for simplicity, we are returning the mock details directly.
    for (let i = 0; i < shipmentDetails.Shipment.length; i++) {
      if (shipmentDetails.Shipment[i].ShipmentNo == shipmentNo) {
        details = shipmentDetails.Shipment[i]
        //details = results.find(shipment => shipmentDetails.Shipment[i].ShipmentNo === shipmentNo);
      }
    }
    // let details1 = results.filter(
    //   shipment => return shipment.
    // );
    // Return an observable with the found details or undefined
    return of(details);
  }
}
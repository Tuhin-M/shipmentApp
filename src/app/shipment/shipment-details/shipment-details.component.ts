import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.scss']
})
export class ShipmentDetailsComponent implements OnInit {
  shipment: any;
  hideData: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private shipmentService: MyServiceService) { }

  ngOnInit() {
    const shipmentNo = this.route.snapshot.params['id'];
    this.shipmentService.getShipmentDetails(shipmentNo).subscribe(details => {
      this.shipment = details;
    });
  }

  onClose() {
    if (history.state.cameFromList) {
      this.router.navigate(['/shipments/results']);
    } else {
      this.router.navigate(['/home']);
    }
  }

  hideView() {
    this.hideData = true;
  };
  showView() {
    this.hideData = false;
  }
}
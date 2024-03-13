import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from 'src/app/my-service.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-shipment-list',
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.scss']
})
export class ShipmentListComponent implements OnInit {
  shipments: any[] = [];
  filteredShipments: any[]; // The list to display, after applying filters
  showFilters = false;
  statusFilters: string[] = ['Ready for Backroom Pick', 'Backroom Pick in Progress', 'Ready for Customer Pickup', 'Ready for Packing', 'Packing in Progress', 'Packed', 'Shipped/Picked', 'Cancelled']; // List of filters
  selectedStatusFilters: Set<string> = new Set();
  myCheckboxValue: boolean;
  constructor(private route: ActivatedRoute, private router: Router, private shipmentService: MyServiceService) { }

  ngOnInit() {
    // Assuming search results are passed via state from the search component
    const currentState = this.router.getCurrentNavigation()?.extras.state;
    if (currentState && currentState['searchResults']) {
      this.shipments = currentState['searchResults'];
    } else {
      this.shipmentService.getShipments().subscribe(data => {
        this.shipments = data;
        this.filteredShipments = data
      });
    }
  }

  navigateToDetails(shipmentNo: string) {
    this.router.navigate(['/shipments/details', shipmentNo], {
      state: { cameFromList: true }
    });
  }
  onClose() {
    this.router.navigate(['/home']);
  }
  toggleFilter() {
    this.showFilters = !this.showFilters;
  }
  onStatusFilterChange(event, status) {
    let checked = event.target.value
    if (checked) {
      this.selectedStatusFilters.add(status);
    } else {
      this.selectedStatusFilters.delete(status);
    }
  }

  applyFilters() {
    this.filteredShipments = this.shipments.filter(shipment =>
      this.selectedStatusFilters.size === 0 || this.selectedStatusFilters.has(shipment.Status)
    );
  }

  resetFilters() {
    this.selectedStatusFilters.clear();
    this.filteredShipments = this.shipments;
    // this.myCheckboxValue = false;
  }
}



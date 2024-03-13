import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-shipment-search',
  templateUrl: './shipment-search.component.html',
  styleUrls: ['./shipment-search.component.scss']
})
export class ShipmentSearchComponent {
  searchForm: FormGroup;



  constructor(private router: Router, private shipmentService: MyServiceService) {

  }
  ngOnInit(): void {
    this.searchForm = new FormGroup({
      OrderNo: new FormControl(''),
      ShipmentNo: new FormControl(''),
      FirstName: new FormControl(''),
      LastName: new FormControl(''),
      EmailID: new FormControl(''),
      Phonenumber: new FormControl(''),
    });
  }

  onSearch() {
    // Checks if at least one form field has a value
    const hasValues = Object.values(this.searchForm.value).some(value => value !== null && value !== '');

    if (this.searchForm.valid && hasValues) {
      this.shipmentService.searchShipments(this.searchForm.value).subscribe(results => {
        if (results.length === 1) {
          this.router.navigate(['/shipments/details', results[0].ShipmentNo]);
        } else {
          this.router.navigate(['/shipments/results'], { state: { searchResults: results } });
        }
      });
    } else {
      this.router.navigate(['/shipments/results']);
    }
  }
  hasCriteria(criteria: any): boolean {
    return Object.values(criteria).some(value => value);
  }
  resetForm() {
    this.searchForm.reset()
  }

}

import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../../interfaces/customer.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomersService
  ) { }

  ngOnInit(): void {
    this.getParamsRoute();
  }

  customer?: Customer;

  getCustomer(id: string){
    this.customerService.getCustomerById(id).subscribe(
      response => this.customer = response
    );
  }

  getParamsRoute(){
    this.activatedRoute.paramMap.subscribe(
      params => {
        const id = params.get('id');
        if(id != null){
          this.getCustomer(id);
        }
      }
    )
  }

}

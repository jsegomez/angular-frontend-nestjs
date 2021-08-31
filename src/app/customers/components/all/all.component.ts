import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Customer } from '../../../interfaces/customer.interface';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(private customerService: CustomersService) { }

  ngOnInit(): void {
    this.loadData();
  }

  customers: Customer[] = [];

  loadData(){
    this.customerService.getAll().subscribe(
      response => {
        this.customers = response;
        console.log(this.customers)
      }
    );
  }

}

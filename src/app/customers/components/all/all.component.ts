import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Customer } from '../../../interfaces/customer.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(
    private router: Router,
    private customerService: CustomersService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  customers: Customer[] = [];

  loadData(){
    this.customerService.getAll().subscribe(
      response => this.customers = response
    );
  }

  details(id: string){
    this.router.navigate([`/customers/details/${id}`])
  }

}

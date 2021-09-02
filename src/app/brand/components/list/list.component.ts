import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../../services/brands.service';
import { Brand } from '../../../interfaces/brand.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private brandService: BrandsService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  brands: Brand[] = [];

  getData(){
    this.brandService.getBrands().subscribe(
      response => this.brands = response
    )
  }

}

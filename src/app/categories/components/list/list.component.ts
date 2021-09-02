import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../../interfaces/category.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private categoryService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  categories: Category[] = [];

  getCategories(){
    this.categoryService.getAll().subscribe(
      response => this.categories = response
    )
  }

}

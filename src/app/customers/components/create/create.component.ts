import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  public formCustomer = this.formBuilder.group({
    name      : ['', Validators.required],
    lastName  : ['', Validators.required],
    phone     : ['', Validators.required],
    email     : ['', Validators.required],
    address   : this.formBuilder.array([]),
  });

  items: number[] = [1,1,1,1,1,1,1];

  get addresses(){
    return this.formCustomer.get('address') as FormArray;
  }

}

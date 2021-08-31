import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routes
import { CustomersRoutingModule } from './customers-routing.module';

// Components
import { CreateComponent } from './components/create/create.component';
import { AllComponent } from './components/all/all.component';


@NgModule({
  declarations: [
    CreateComponent,
    AllComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomersModule { }

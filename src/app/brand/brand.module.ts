import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routes
import { BrandRoutingModule } from './brand-routing.module';

// Components
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { CreateComponent } from './components/create/create.component';

@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BrandModule { }

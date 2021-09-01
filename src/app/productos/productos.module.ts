import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routes
import { ProductosRoutingModule } from './productos-routing.module';

// Components
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }

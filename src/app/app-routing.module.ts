import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'products', loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

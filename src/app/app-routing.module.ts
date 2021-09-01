import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'products', loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule)
  },
  {
    path: 'brands', loadChildren: () => import('./brand/brand.module').then(m => m.BrandModule)
  },
  {
    path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

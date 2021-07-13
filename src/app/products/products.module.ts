import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsComponent } from './products.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    ProductsComponent,
    SearchComponent,
  ],
  imports: [CommonModule],
  exports: [ProductListComponent, SearchComponent]
})
export class ProductsModule {}

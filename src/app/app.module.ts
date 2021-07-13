import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterModule } from './filter/filter.module';
import { CheckoutModule } from './checkout/checkout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FilterModule,
    CheckoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

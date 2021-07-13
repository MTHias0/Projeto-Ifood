import { Component, OnInit } from '@angular/core';
import { PRODUCT_LIST_OPTION } from './product-list.options';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public list = PRODUCT_LIST_OPTION;

  constructor() {}

  ngOnInit(): void {}
}

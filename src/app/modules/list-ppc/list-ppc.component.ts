import { Component, OnInit } from '@angular/core';
import { SelectItem, PrimeNGConfig } from 'primeng/api';
import { Product } from './product';
import { ProductService } from './productservice';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-list-ppc',
  templateUrl: './list-ppc.component.html',
  styleUrls: ['./list-ppc.component.scss'],
})
export class ListPPCComponent implements OnInit {
  products1: Product[] = [];
  products2: Product[] = [];
  products3: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // this.productService
    //   .getProductsSmall()
    //   .then((data) => {
    //     this.products1 = data;
    //     console.log("bfshdbfsdfshdjhk", this.products1);
    //   }
    //   );
    // this.productService
    //   .getProductsSmall()
    //   .then((data) => (this.products2 = data));
    // this.productService
    //   .getProductsSmall()
    //   .then((data) => (this.products3 = data));

    this.productService.mockApi().subscribe((res) => {
      console.log(res);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { SelectItem, PrimeNGConfig } from 'primeng/api';
import { Product } from './product';
import { ProductService } from './productservice';
import { SortEvent } from 'primeng/api';
interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-list-ppc',
  templateUrl: './list-ppc.component.html',
  styleUrls: ['./list-ppc.component.scss'],

})



export class ListPPCComponent implements OnInit {

  cities: City[] = [];
  selectedCity: City[]=[];
  products1: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.cities = [
      {name: 'Approved', code: 'Ap'},
      {name: 'In Progress', code: 'IP'},
      {name: 'Rejected', code: 'Rj'},
      {name: 'Cancel', code: 'can'},
  ];
    this.productService.mockApi().subscribe((res) => {
      this.products1 = res;
      console.log(this.products1);
    });
  }
}

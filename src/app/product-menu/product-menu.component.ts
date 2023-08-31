import { Component, OnInit } from '@angular/core';
import { Product } from '../product.interface';
import { ProductServiceService } from '../product-service.service';


@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css']
})
export class ProductMenuComponent implements OnInit{

  products: Product[] = [];
  totalProducts: number = 0; 
  constructor(private productService: ProductServiceService){


  }
  ngOnInit(): void {
    
    this.products = this.productService.getAllProducts();
    this.totalProducts = this.products.length;
    
  }
}

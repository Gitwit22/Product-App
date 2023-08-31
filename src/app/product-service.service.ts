import { Injectable } from '@angular/core';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {

  constructor() { 

    
  }

  private inventory: Product [] = [
    {name: 'camera', productID: '2331', price: 2800},
    {name: 'tripod', productID: '4423', price: 400},
    {name: 'lens', productID: '6745', price: 1000},
    {name: 'bag', productID: '2255', price: 100},
    {name: 'rag', productID: '2233', price: 5}


  ];

  getAllProducts(): Product[] {
    return this.inventory;
  }

  
}

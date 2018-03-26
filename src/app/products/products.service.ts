import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable()

export class ProductService {

  getProducts(): IProduct[] {
    return [
      {
        productId: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        releaseDate: 'March 10, 2016',
        description: '15 gallon capacity',
        price: 32.99,
        starRating: 3.5,
        imageUrl: 'assets/images/Shopping-cart-icon.png'
      },
      {
        productId: 5,
        productName: 'Hammer',
        productCode: 'TBX-0048',
        releaseDate: 'May 21, 2016',
        description: 'Curved claw steel',
        price: 8.9,
        starRating: 4.8,
        imageUrl: 'assets/images/hammer-icon.png'
      },
      {
        productId: 8,
        productName: 'Saw',
        productCode: 'TBX-0022',
        releaseDate: 'May 15, 2016',
        description: '15-inch steel blade hand saw',
        price: 11.55,
        starRating: 3.7,
        imageUrl: 'assets/images/saw.png'
      },
      {
        productId: 10,
        productName: 'Video Game Controller',
        productCode: 'GMG-0042',
        releaseDate: 'October 15, 2015',
        description: 'Standard two-button video game controller',
        price: 35.95,
        starRating: 4.6,
        imageUrl: 'assets/images/controller.png'
      }
    ];
  }
}

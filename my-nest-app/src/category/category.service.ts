/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable() //This derorator is saying, With the help of DI, nestJS will Inject This class. that means we can use evrywhere
export class CategoryService {
  getCategories() {
    return ['Mobile', 'Laptop', 'Tablet'];
  }
}

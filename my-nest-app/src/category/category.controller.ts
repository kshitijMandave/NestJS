/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {} // here with the help of DI constructor, we are injecting the CategoryService into this controller
  @Get()
  getAllCategories() {
    return this.categoryService.getCategories();
  }
}

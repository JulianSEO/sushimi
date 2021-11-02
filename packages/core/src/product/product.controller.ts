import { Controller, Get } from '@nestjs/common';

import { Product } from '@sushimi/interfaces';

import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/')
  async find(): Promise<Product[]> {
    return await this.productService.find();
  }
}

import { Injectable } from '@nestjs/common';
import { Product } from '@sushimi/interfaces/lib';

import mock from './mock';

@Injectable()
export class ProductService {
  async find(): Promise<Product[]> {
    return mock.items as unknown as Product[];
  }
}

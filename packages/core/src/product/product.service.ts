import { Injectable } from '@nestjs/common';

import mock from './mock';

@Injectable()
export class ProductService {
  async find() {
    return mock.items;
  }
}

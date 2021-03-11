import { ResponseModel } from './responseModel';
import { Product } from './product';

export interface ProductResponseModel extends ResponseModel{
  data:Product[],
}

import { OmitType } from '@nestjs/swagger';
import { ProductEntity } from '../entities';

export class CreateProductDto extends OmitType(ProductEntity, [
  'id',
  'createdAt',
  'updatedAt',
  'sku',
]) {}

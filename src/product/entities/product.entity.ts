import { BaseEntity } from '@app/common';
import { ApiProperty } from '@nestjs/swagger';
import { ProductStockKeepingUnit } from '../../product-stock-keeping-unit/entities';

export class ProductEntity extends BaseEntity {
  @ApiProperty({
    title: 'name',
    type: () => String,
    description: 'Наименование товара',
  })
  title: string;

  @ApiProperty({
    name: 'description',
    type: () => String,
    description: '',
  })
  description: string;

  @ApiProperty({
    name: 'slug',
    type: () => String,
  })
  slug: string;

  @ApiProperty({
    name: 'sku',
    type: () => ProductStockKeepingUnit,
    isArray: true,
    description: 'Торговые предложения (sku)',
  })
  sku: ProductStockKeepingUnit[];
}

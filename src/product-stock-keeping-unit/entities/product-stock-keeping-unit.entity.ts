import type { ProductStockKeepingUnit as BaseProductStockKeepingUnit } from '@prisma/client';
import { BaseEntity } from '@app/common';
import { ApiProperty } from '@nestjs/swagger';

export class ProductStockKeepingUnit
  extends BaseEntity
  implements BaseProductStockKeepingUnit
{
  @ApiProperty({
    name: 'productId',
    type: () => String,
    description: 'Идентификатор товара',
  })
  productId: string;

  @ApiProperty({
    name: 'count',
    type: () => Number,
    default: 0,
    description: 'Количество sku',
  })
  count: number;
}

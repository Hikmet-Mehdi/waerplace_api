import { ApiProperty, PickType } from '@nestjs/swagger';
import { PropertyWhereUniqueDto } from '../../property/dto';
import { ProductStockKeepingUnit } from '../entities';

export class CreateProductStockKeepingUnitDto extends PickType(
  ProductStockKeepingUnit,
  ['productId', 'count'],
) {
  @ApiProperty({
    name: 'properties',
    type: () => PropertyWhereUniqueDto,
  })
  properties: PropertyWhereUniqueDto[];
}

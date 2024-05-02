import { PartialType } from '@nestjs/swagger';
import { CreateProductStockKeepingUnitDto } from './create-product-stock-keeping-unit.dto';

export class UpdateProductStockKeepingUnitDto extends PartialType(
  CreateProductStockKeepingUnitDto,
) {}

import { Module } from '@nestjs/common';
import { ProductStockKeepingUnitService } from './product-stock-keeping-unit.service';
import { ProductStockKeepingUnitController } from './product-stock-keeping-unit.controller';

@Module({
  controllers: [ProductStockKeepingUnitController],
  providers: [ProductStockKeepingUnitService],
})
export class ProductStockKeepingUnitModule {}

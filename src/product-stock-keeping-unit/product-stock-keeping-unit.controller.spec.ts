import { Test, TestingModule } from '@nestjs/testing';
import { ProductStockKeepingUnitController } from './product-stock-keeping-unit.controller';
import { ProductStockKeepingUnitService } from './product-stock-keeping-unit.service';

describe('ProductStockKeepingUnitController', () => {
  let controller: ProductStockKeepingUnitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductStockKeepingUnitController],
      providers: [ProductStockKeepingUnitService],
    }).compile();

    controller = module.get<ProductStockKeepingUnitController>(
      ProductStockKeepingUnitController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

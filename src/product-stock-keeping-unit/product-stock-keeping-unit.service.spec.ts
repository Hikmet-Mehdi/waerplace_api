import { Test, TestingModule } from '@nestjs/testing';
import { ProductStockKeepingUnitService } from './product-stock-keeping-unit.service';

describe('ProductStockKeepingUnitService', () => {
  let service: ProductStockKeepingUnitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductStockKeepingUnitService],
    }).compile();

    service = module.get<ProductStockKeepingUnitService>(ProductStockKeepingUnitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

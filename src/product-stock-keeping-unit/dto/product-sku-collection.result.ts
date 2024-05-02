import { BaseCollectionResult } from '@app/common';
import { ProductStockKeepingUnit } from '../entities';

export class ProductSkuCollectionResult extends BaseCollectionResult(
  ProductStockKeepingUnit,
) {}

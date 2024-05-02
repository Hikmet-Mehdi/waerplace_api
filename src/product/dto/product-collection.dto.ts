import { BaseCollectionResult } from '@app/common/dto/base-collection-result.entity';
import { PropertyEntity } from '../../property/entities/property.entity';

export class ProductCollectionResult extends BaseCollectionResult(
  PropertyEntity,
) {}

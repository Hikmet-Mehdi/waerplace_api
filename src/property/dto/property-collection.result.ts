import { BaseCollectionResult } from '@app/common';
import { PropertyEntity } from '../entities/property.entity';

export class PropertyCollectionResult extends BaseCollectionResult(
  PropertyEntity,
) {}

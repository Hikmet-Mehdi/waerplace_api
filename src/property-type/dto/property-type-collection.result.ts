import { BaseCollectionResult } from '@app/common';
import { PropertyTypeEntity } from '../entities/property-type.entity';

export class PropertyTypeCollectionResult extends BaseCollectionResult(
  PropertyTypeEntity,
) {}

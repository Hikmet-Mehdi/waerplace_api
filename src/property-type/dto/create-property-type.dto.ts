import { OmitType } from '@nestjs/swagger';
import { PropertyTypeEntity } from '../entities/property-type.entity';

export class CreatePropertyTypeDto extends OmitType(PropertyTypeEntity, [
  'id',
  'createdAt',
  'isActive',
  'updatedAt',
]) {}

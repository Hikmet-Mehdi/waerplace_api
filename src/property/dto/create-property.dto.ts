import { PropertyEntity } from '../entities/property.entity';
import { ApiProperty, OmitType } from '@nestjs/swagger';

export class CreatePropertyDto extends OmitType(PropertyEntity, [
  'id',
  'createdAt',
  'isActive',
  'updatedAt',
  'propertyTypeId',
]) {
  @ApiProperty({
    type: () => String,
  })
  propertyTypeSlug: string;
}

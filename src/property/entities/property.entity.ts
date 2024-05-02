import type { Property } from '@prisma/client';
import { BaseDictionaryEntity } from '@app/common';
import { ApiProperty } from '@nestjs/swagger';

export class PropertyEntity extends BaseDictionaryEntity implements Property {
  @ApiProperty({
    name: 'propertyTypeId',
    type: () => String,
    description: 'Тип свойства',
  })
  propertyTypeId: string;
}

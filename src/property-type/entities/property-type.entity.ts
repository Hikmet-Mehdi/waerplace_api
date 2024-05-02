import { BaseDictionaryEntity } from '@app/common';

import { PropertyType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class PropertyTypeEntity
  extends BaseDictionaryEntity
  implements PropertyType
{
  @ApiProperty({
    name: 'isSku',
    type: () => Boolean,
    description: 'Используется для создания sku',
    default: false,
  })
  isSku: boolean;
}

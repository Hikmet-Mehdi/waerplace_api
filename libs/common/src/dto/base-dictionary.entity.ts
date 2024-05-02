import { BaseEntity } from './base.entity';
import { ApiProperty } from '@nestjs/swagger';

export class BaseDictionaryEntity extends BaseEntity {
  @ApiProperty({
    type: () => String,
    description: 'Наименование',
  })
  name: string;

  @ApiProperty({
    type: () => String,
    description: 'Описание',
  })
  description: string;

  @ApiProperty({
    type: () => String,
    description: 'Уникальный ключ на латинице',
  })
  slug: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class BaseEntity {
  @ApiProperty({
    name: 'id',
    type: () => String,
    description: 'Уникальный идентификатор',
  })
  id: string;

  @ApiProperty({
    name: 'isActive',
    type: () => Boolean,
    description: 'Статус активности',
  })
  isActive: boolean;

  @ApiProperty({
    name: 'createdAt',
    type: () => Date,
    description: 'Дата и время создания',
  })
  createdAt: Date;

  @ApiProperty({
    name: 'updatedAt',
    type: () => Date,
    description: 'Дата и время последнего обновления',
  })
  updatedAt: Date;
}

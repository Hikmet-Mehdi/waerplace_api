import { ApiProperty, PickType } from '@nestjs/swagger';
import { BaseEntity } from './base.entity';

export class DeleteResult extends PickType(BaseEntity, ['id']) {
  @ApiProperty({
    name: 'message',
    type: () => String,
    nullable: true,
    required: false,
    description: 'Сообщение об удалении',
  })
  message?: string;
}

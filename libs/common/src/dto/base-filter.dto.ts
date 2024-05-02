import { ApiProperty } from '@nestjs/swagger';

export class BaseFilterDto {
  @ApiProperty({
    type: () => String,
    isArray: true,
    required: false,
    nullable: true,
  })
  id?: string[];

  @ApiProperty({
    type: () => Boolean,
    required: false,
    nullable: true,
  })
  isActive?: boolean;
}

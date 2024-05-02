import { BaseFilterDto } from './base-filter.dto';
import { ApiProperty } from '@nestjs/swagger';

export class BaseDictionaryFilterDto extends BaseFilterDto {
  @ApiProperty({
    type: () => String,
    isArray: true,
    required: false,
  })
  slugs?: string[];
}

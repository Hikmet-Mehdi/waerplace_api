import { BaseDictionaryFilterDto } from '@app/common';
import { ApiProperty } from '@nestjs/swagger';

export class PropertyFilterDto extends BaseDictionaryFilterDto {
  @ApiProperty({
    type: () => String,
    isArray: true,
    required: false,
  })
  propertyTypeSlugs?: string[];
}

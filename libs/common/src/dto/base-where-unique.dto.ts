import { PickType } from '@nestjs/swagger';
import { BaseEntity } from './base.entity';

export class BaseWhereUniqueDto extends PickType(BaseEntity, ['id']) {}

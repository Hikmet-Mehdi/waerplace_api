import { Type } from '@nestjs/common';
import { inheritPropertyInitializers } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export function BaseCollectionResult<T>(classRef: Type<T>) {
  class BaseCollectionResultClass {
    @ApiProperty({
      name: 'total',
      type: () => Number,
      description: 'Общее количество',
    })
    total: number;

    @ApiProperty({
      name: 'page',
      type: () => Number,
      description: 'Номер страницы',
    })
    page: number;

    @ApiProperty({
      name: 'pageSize',
      description: 'Кол-во объектов на одной странице',
      type: () => Number,
    })
    pageSize: number;

    @ApiProperty({
      name: 'data',
      isArray: true,
      type: () => classRef,
    })
    data: (typeof classRef)[];

    constructor() {
      inheritPropertyInitializers(this, classRef);
    }
  }

  return BaseCollectionResultClass;
}

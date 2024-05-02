import { Injectable } from '@nestjs/common';
import { CreatePropertyTypeDto } from './dto/create-property-type.dto';
import { UpdatePropertyTypeDto } from './dto/update-property-type.dto';
import { PrismaService } from '@app/prisma';
import { PropertyTypeFilterDto } from './dto/property-type-filter.dto';

@Injectable()
export class PropertyTypeService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPropertyTypeDto: CreatePropertyTypeDto) {
    return this.prisma.propertyType.create({
      data: {
        ...createPropertyTypeDto,
      },
    });
  }

  findAll(body: PropertyTypeFilterDto) {
    return this.prisma.propertyType.findMany();
  }

  findOne(id: string) {
    return this.prisma.propertyType.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updatePropertyTypeDto: UpdatePropertyTypeDto) {
    return this.prisma.propertyType.update({
      data: {
        ...updatePropertyTypeDto,
      },
      where: {
        id,
      },
    });
  }

  remove(id: string) {
    return this.prisma.propertyType.delete({
      where: {
        id,
      },
    });
  }
}

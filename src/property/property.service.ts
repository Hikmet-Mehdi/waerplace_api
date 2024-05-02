import { Injectable } from '@nestjs/common';

import { PrismaService } from '@app/prisma';
import { UpdatePropertyDto, CreatePropertyDto, PropertyFilterDto } from './dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class PropertyService {
  constructor(private readonly prisma: PrismaService) {}

  create({ propertyTypeSlug, ...data }: CreatePropertyDto) {
    return this.prisma.property.create({
      data: {
        ...data,
        propertyType: {
          connect: {
            slug: propertyTypeSlug,
          },
        },
      },
    });
  }

  findAll(body: PropertyFilterDto) {
    console.log('body', body);
    const where: Prisma.PropertyWhereInput = Object.fromEntries(
      Object.entries(body).map(([key, value]) => {
        switch (key) {
          case 'propertyTypeSlugs':
            return [
              'propertyType',
              {
                slug: {
                  in: value,
                },
              },
            ];
          case 'id':
            return ['id', { in: value }];
          case 'isActive':
            return ['isActive', value];
          case 'slugs':
            return [
              'slug',
              {
                in: value,
              },
            ];
          default:
            return [];
        }
      }),
    );
    console.log('where', where);
    return this.prisma.property.findMany({
      where,
      include: {
        propertyType: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}

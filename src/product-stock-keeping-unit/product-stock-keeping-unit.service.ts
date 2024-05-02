import { Injectable } from '@nestjs/common';
import {
  CreateProductStockKeepingUnitDto,
  UpdateProductStockKeepingUnitDto,
} from './dto';
import { PrismaService } from '@app/prisma';

@Injectable()
export class ProductStockKeepingUnitService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createProductStockKeepingUnitDto: CreateProductStockKeepingUnitDto,
  ) {
    const { productId, count, properties } = createProductStockKeepingUnitDto;
    return this.prisma.productStockKeepingUnit.create({
      data: {
        product: {
          connect: {
            id: productId,
          },
        },
        count,
        properties: {
          create: properties.map(({ id }) => ({
            property: {
              connect: {
                id,
              },
            },
          })),
        },
      },
    });
  }

  findAll() {
    return `This action returns all productStockKeepingUnit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productStockKeepingUnit`;
  }

  update(
    id: number,
    updateProductStockKeepingUnitDto: UpdateProductStockKeepingUnitDto,
  ) {
    return `This action updates a #${id} productStockKeepingUnit`;
  }

  remove(id: number) {
    return `This action removes a #${id} productStockKeepingUnit`;
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductStockKeepingUnitService } from './product-stock-keeping-unit.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductStockKeepingUnit } from './entities';
import {
  ProductSkuCollectionResult,
  CreateProductStockKeepingUnitDto,
  UpdateProductStockKeepingUnitDto,
} from './dto';
import { DeleteResult } from '@app/common';

@ApiTags('ProductSKU')
@Controller('product_sku')
export class ProductStockKeepingUnitController {
  constructor(
    private readonly productStockKeepingUnitService: ProductStockKeepingUnitService,
  ) {}

  @ApiResponse({
    type: () => ProductSkuCollectionResult,
    status: '2XX',
  })
  @Post('filter')
  getFilter() {
    return this.productStockKeepingUnitService.findAll();
  }

  @ApiBody({
    type: () => CreateProductStockKeepingUnitDto,
    required: true,
  })
  @ApiResponse({
    type: () => ProductStockKeepingUnit,
    status: '2XX',
  })
  @Post()
  create(
    @Body() createProductStockKeepingUnitDto: CreateProductStockKeepingUnitDto,
  ) {
    return this.productStockKeepingUnitService.create(
      createProductStockKeepingUnitDto,
    );
  }

  @Get()
  findAll() {
    return this.productStockKeepingUnitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productStockKeepingUnitService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductStockKeepingUnitDto: UpdateProductStockKeepingUnitDto,
  ) {
    return this.productStockKeepingUnitService.update(
      +id,
      updateProductStockKeepingUnitDto,
    );
  }

  @ApiResponse({
    type: () => DeleteResult,
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productStockKeepingUnitService.remove(+id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import {
  CreateProductDto,
  ProductCollectionResult,
  UpdateProductDto,
} from './dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductEntity } from './entities';
import { DeleteResult } from '@app/common';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiResponse({
    type: () => ProductCollectionResult,
  })
  @Post('filter')
  getFiltered() {}

  @ApiBody({
    type: () => CreateProductDto,
  })
  @ApiResponse({
    type: () => ProductEntity,
    status: '2XX',
  })
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @ApiResponse({
    type: () => DeleteResult,
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}

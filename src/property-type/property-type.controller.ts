import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PropertyTypeService } from './property-type.service';
import { CreatePropertyTypeDto } from './dto/create-property-type.dto';
import { UpdatePropertyTypeDto } from './dto/update-property-type.dto';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PropertyTypeEntity } from './entities/property-type.entity';
import { PropertyTypeFilterDto } from './dto/property-type-filter.dto';
import { DeleteResult } from '@app/common';
import { PropertyTypeCollectionResult } from './dto';

@ApiTags('PropertyType')
@Controller('property-type')
export class PropertyTypeController {
  constructor(private readonly propertyTypeService: PropertyTypeService) {}

  @ApiResponse({
    type: () => PropertyTypeEntity,
    status: '2XX',
  })
  @ApiBody({
    type: () => CreatePropertyTypeDto,
  })
  @Post()
  create(@Body() createPropertyTypeDto: CreatePropertyTypeDto) {
    return this.propertyTypeService.create(createPropertyTypeDto);
  }

  @ApiBody({
    type: () => PropertyTypeFilterDto,
  })
  @ApiResponse({
    type: () => PropertyTypeCollectionResult,
  })
  @Post('filter')
  findAll(@Body() body: PropertyTypeFilterDto) {
    return this.propertyTypeService.findAll(body);
  }

  @ApiResponse({
    type: () => PropertyTypeEntity,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyTypeService.findOne(id);
  }

  @ApiResponse({
    type: () => PropertyTypeEntity,
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePropertyTypeDto: UpdatePropertyTypeDto,
  ) {
    return this.propertyTypeService.update(id, updatePropertyTypeDto);
  }

  @ApiResponse({
    type: () => DeleteResult,
    status: '2XX',
  })
  @ApiParam({
    type: () => String,
    name: 'id',
    description: 'Уникальный идентификатор',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyTypeService.remove(id);
  }
}

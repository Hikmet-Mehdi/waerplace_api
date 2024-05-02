import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PropertyService } from './property.service';
import {
  CreatePropertyDto,
  PropertyCollectionResult,
  UpdatePropertyDto,
} from './dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PropertyEntity } from './entities/property.entity';
import { PropertyFilterDto } from './dto';
import { DeleteResult } from '@app/common';

@ApiTags('Property')
@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @ApiResponse({
    type: () => PropertyEntity,
  })
  @Post()
  create(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertyService.create(createPropertyDto);
  }

  @ApiResponse({
    type: () => PropertyCollectionResult,
    isArray: true,
  })
  @Post('/filter')
  findAll(@Body() body: PropertyFilterDto) {
    return this.propertyService.findAll(body);
  }

  @ApiResponse({
    type: () => PropertyEntity,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyService.findOne(+id);
  }

  @ApiResponse({
    type: () => PropertyEntity,
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePropertyDto: UpdatePropertyDto,
  ) {
    return this.propertyService.update(+id, updatePropertyDto);
  }

  @ApiResponse({
    type: () => DeleteResult,
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyService.remove(+id);
  }
}

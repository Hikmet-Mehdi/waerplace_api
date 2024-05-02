import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyTypeModule } from './property-type/property-type.module';
import { PropertyModule } from './property/property.module';
import { PrismaModule } from '@app/prisma';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { ProductStockKeepingUnitModule } from './product-stock-keeping-unit/product-stock-keeping-unit.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    PrismaModule,
    PropertyTypeModule,
    PropertyModule,
    ProductModule,
    ProductStockKeepingUnitModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

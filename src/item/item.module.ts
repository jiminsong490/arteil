import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemService } from './service/item.service';
import { ItemController } from './controller/item.controller';
import { Item } from './domain/item.entity';

@Module({
  providers: [ItemService],
  controllers: [ItemController],
  imports: [TypeOrmModule.forFeature([Item])],
})
export class ItemModule {}

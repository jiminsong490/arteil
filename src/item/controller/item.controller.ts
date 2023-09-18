import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ItemService } from '../service/item.service';
import { CreateItemRequest, PurchaseItemRequest } from '../dto/item.dto';

@Controller('api/v1/items')
export class ItemController {
  constructor(private readonly appService: ItemService) {}

  @Get()
  findAll() {
    return this.appService.findAll();
  }

  @Post(':id')
  create(@Param('id') id: number, @Body() item: CreateItemRequest) {
    return this.appService.create(id, item);
  }

  @Post('/purchases/:id')
  purchase(@Param('id') id: number, @Body() order: PurchaseItemRequest) {
    return this.appService.purchase(id, order);
  }
}

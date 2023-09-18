import { Body, Controller, Param, Post } from '@nestjs/common';
import { ItemService } from '../service/item.service';
import { CreateItemRequest } from '../dto/item.dto';

@Controller('api/v1/items')
export class ItemController {
  constructor(private readonly appService: ItemService) {}

  @Post(':id')
  create(@Param('id') id: number, @Body() item: CreateItemRequest) {
    return this.appService.create(id, item);
  }
}

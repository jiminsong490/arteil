import { Controller } from '@nestjs/common';
import { ItemService } from '../service/item.service';

@Controller('api/v1/items')
export class ItemController {
  constructor(private readonly appService: ItemService) {}
}

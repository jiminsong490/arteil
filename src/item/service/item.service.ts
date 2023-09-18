import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Item } from '../domain/item.entity';
import { CreateItemRequest, ItemInfoResponse } from '../dto/item.dto';
import { plainToInstance } from 'class-transformer';
import { ResponseDto } from '../../global/dto/response.dto';
import { User } from '../../user/domain/user.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private ItemRepository: Repository<Item>,
    @InjectRepository(User)
    private UserRepository: Repository<User>,
  ) {}

  async findAll() {
    const res = await this.ItemRepository.find();
    const data = plainToInstance(ItemInfoResponse, res);

    return plainToInstance(ResponseDto<ItemInfoResponse>, {
      code: '200',
      message: 'success',
      data: data,
    });
  }

  async create(id: number, item: CreateItemRequest) {
    const user = await this.UserRepository.exist({
      where: { id: id },
    });
    if (!user) throw new NotFoundException('존재하지 않는 유저입니다.');

    item.userId = id;

    const res = await this.ItemRepository.save(item);
    const data = plainToInstance(ItemInfoResponse, res);

    return plainToInstance(ResponseDto<ItemInfoResponse>, {
      code: '200',
      message: 'success',
      data: data,
    });
  }
}

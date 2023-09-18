import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../domain/user.entity';
import { CreateUserRequest, UserInfoResponse } from '../dto/user.dto';
import { plainToInstance } from 'class-transformer';
import { ResponseDto } from '../../global/dto/response.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,
  ) {}

  async create(user: CreateUserRequest) {
    const res = await this.UserRepository.save(user);
    const data = plainToInstance(UserInfoResponse, res);

    return plainToInstance(ResponseDto<UserInfoResponse>, {
      code: '200',
      message: 'success',
      data: data,
    });
  }
}

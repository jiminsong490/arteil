import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserRequest } from '../dto/user.dto';

@Controller('api/v1/users')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Post() // 유저 등록 (이름, 소지금)
  create(@Body() user: CreateUserRequest) {
    return this.appService.create(user);
  }
}

import { Controller } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('api/v1/users')
export class UserController {
  constructor(private readonly appService: UserService) {}
}

import { Exclude } from 'class-transformer';

class CreateUserRequest {
  name: string;
  money: number;
}

class UserInfoResponse {
  id: number;
  name: string;
  money: number;
  @Exclude()
  createdAt: Date;
  @Exclude()
  updatedAt: Date;
  @Exclude()
  deletedAt?: Date | null;
}

export { CreateUserRequest, UserInfoResponse };

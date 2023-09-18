import { Exclude } from 'class-transformer';

class CreateItemRequest {
  userId: number;
  name: string;
  price: number;
}

class ItemInfoResponse {
  id: number;
  name: string;
  price: number;
  @Exclude()
  createdAt: Date;
  @Exclude()
  updatedAt: Date;
  @Exclude()
  deletedAt?: Date | null;
}

class PurchaseItemRequest {
  userId: number;
}

export { CreateItemRequest, ItemInfoResponse, PurchaseItemRequest };

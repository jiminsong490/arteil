import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './orm.config';
import { UserModule } from './user/user.module';
import { ItemModule } from './item/item.module';

@Module({
  // eslint-disable-next-line prettier/prettier
  imports: [TypeOrmModule.forRootAsync({ useFactory: ormConfig }), UserModule, ItemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

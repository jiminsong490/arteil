import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './user/domain/user.entity';
import { Item } from './item/domain/item.entity';

function ormConfig(): TypeOrmModuleOptions {
  const commonConf = {
    SYNCRONIZE: true,
    ENTITIES: [User, Item],
    MIGRATIONS: [__dirname + '/migrations/**/*{.ts,.js}'],
    MIGRATIONS_RUN: false,
  };

  return {
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: '12341234',
    database: 'arteil',
    logging: true,
    synchronize: commonConf.SYNCRONIZE,
    entities: commonConf.ENTITIES,
    migrations: commonConf.MIGRATIONS,
    migrationsRun: commonConf.MIGRATIONS_RUN,
  };
}

export { ormConfig };

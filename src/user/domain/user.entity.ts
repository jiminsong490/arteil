// eslint-disable-next-line prettier/prettier
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Item } from '../../item/domain/item.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  genre: string;

  @Column('datetime')
  releaseDate: Date;

  @Column('datetime')
  endDate: Date;

  @Column()
  releaseStatus: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt?: Date | null;

  @OneToMany(() => Item, (item) => item.user)
  item: Item[];
}

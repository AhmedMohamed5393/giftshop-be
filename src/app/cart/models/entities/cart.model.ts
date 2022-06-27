import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
@Entity()
export class Cart {
  @PrimaryGeneratedColumn() id: number;
  @Column() user: number;
  @Column() store: number;
  @Column() delivery: string;
  @OneToOne(type => User, user => user.cart) user: User;
}

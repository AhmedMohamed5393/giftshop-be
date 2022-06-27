import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as env from "../../../environment";
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: env.DB_TYPE,
        host: env.POSTGRES_HOST,
        port: env.POSTGRES_PORT,
        username: env.POSTGRES_USER,
        password: env.POSTGRES_PASSWORD,
        database: env.POSTGRES_DB,
        entities: [],
        synchronize: true,
      })
    }),
  ],
})
export class DatabaseModule {}

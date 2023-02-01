import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/model/user.model';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'tbl_users',
      entities: [User],
      synchronize: true,
    })],
  controllers: [],
  providers: [],
})
export class AppModule {}

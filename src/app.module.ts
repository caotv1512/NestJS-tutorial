import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './../ormconfig';

@Module({
  imports: [TodosModule, TypeOrmModule.forRoot(config)],
controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}

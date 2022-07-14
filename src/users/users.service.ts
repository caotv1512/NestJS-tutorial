import { Injectable, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { Users } from './entity/user.entity';

@Injectable()
export class UsersService {
  private users: Users[] = [
    { id: 0, name: 'Marius' },
    { id: 1, name: 'CaoTV' },
  ];

  findAll(name: string): Users[] {
    if (name) {
      return this.users.filter((users) => users.name === name);
    }
    return this.users;
  }

  findById(userId: number): Users {
    return this.users.find((user) => user.id === userId);
  }

  createUser(body: CreateUserDto): Users {
    const newUser = { id: Date.now(), ...body };
    this.users.push(newUser);
    return newUser;
  }
}

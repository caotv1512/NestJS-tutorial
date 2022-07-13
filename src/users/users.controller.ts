import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users.dto';
import { Users } from './entity/user.entity';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {
    }
    @Get()
    getUsers(): Users[] {
        return this.usersService.findAll()
    }

    @Get(':id')
    getUserById(@Param('id') id: string): Users {
        return this.usersService.findById(Number(id))
    }

    @Post()
    createUser(@Body() body: CreateUserDto): Users {
        return this.usersService.createUser(body)
    }
}

import { Controller, Get, Param, Body, Post, Query, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users.dto';
import { Users } from './entity/user.entity';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOkResponse({type:Users, isArray: true})
  @ApiQuery({name:'name', required: false})
  @Get()
  getUsers(@Query('name')name: string): Users[] {
    return this.usersService.findAll(name);
  }

  @ApiOkResponse({type:Users})
  @ApiNotFoundResponse()
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: string): Users {
    const user = this.usersService.findById(Number(id));
    if (!user) {
        throw new NotFoundException();
    }
    return user
  }

  @ApiCreatedResponse({ type: Users })
  @Post()
  createUser(@Body() body: CreateUserDto): Users {
    return this.usersService.createUser(body);
  }
}

import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  ParseIntPipe,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { Profile } from './profile.entity';

@Controller('users')
export class UsersController {
  constructor(private usersServices: UsersService) {}

  @Get()
  @ApiOkResponse({ status: 200, type: User, isArray: true })
  getUsers(): Promise<User[]> {
    return this.usersServices.getUsers();
  }

  @Post()
  @ApiOkResponse({ status: 201, type: User })
  createUser(@Body() newUser: CreateUserDto) {
    return this.usersServices.createUser(newUser);
  }

  @Get(':id')
  @ApiOkResponse({ status: 200, type: User })
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersServices.getUser(id);
  }

  @Delete(':id')
  @ApiOkResponse({ status: 200, type: User })
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersServices.deleteUser(id);
  }

  @Patch(':id')
  @ApiOkResponse({ status: 200, type: User })
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: UpdateUserDto,
  ) {
    return this.usersServices.updateUser(id, user);
  }

  @Post(':id/profile')
  @ApiOkResponse({ status: 201, type: Profile })
  createProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() profile: CreateProfileDto,
  ) {
    return this.usersServices.createProfile(id, profile);
  }
}

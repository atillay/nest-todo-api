import { Body, Controller, Post } from '@nestjs/common';
import type { RegisterDto } from '../dto/register.dto';
import { UsersService } from './users.service';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.usersService.create(registerDto);
  }
}

import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { RegisterDto } from '../dto/register.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOne(email: string): Promise<User | null> {
    return await this.usersRepository.findOneBy({ email });
  }

  async create(registerDto: RegisterDto): Promise<User> {
    return await this.usersRepository.save(registerDto);
  }
}

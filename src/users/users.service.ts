import { Injectable, BadRequestException } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { RegisterDto } from './register.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOne(email: string): Promise<User | null> {
    return await this.usersRepository.findOneBy({ email });
  }

  async create(registerDto: RegisterDto): Promise<Omit<User, 'password'>> {
    if (await this.findOne(registerDto.email)) {
      throw new BadRequestException('Email is already taken');
    }
    const { id, email } = await this.usersRepository.save(registerDto);

    return { id, email };
  }
}

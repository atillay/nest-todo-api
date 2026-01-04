import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/auth/login.dto';
import { JwtPayload } from 'src/contracts/jwt-payload/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn({
    email,
    password,
  }: LoginDto): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(email);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload: Pick<JwtPayload, 'user'> = {
      user: { id: user.id, email: user.email },
    };
    const access_token = this.jwtService.sign(payload);

    return { access_token };
  }
}

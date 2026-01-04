import { User } from 'src/users/user.entity';

export interface JwtPayload {
  user: Pick<User, 'id' | 'email'>;
  exp: number;
  iat: number;
}

import { JwtPayload } from 'src/contracts/jwt-payload/jwt-payload.interface';

declare global {
  namespace Express {
    export interface Request {
      jwtPayload: JwtPayload;
    }
  }
}

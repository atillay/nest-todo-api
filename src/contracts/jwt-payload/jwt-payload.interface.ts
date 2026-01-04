export interface JwtPayload {
  sub: string;
  exp: number;
  email: string;
  iat: number;
}

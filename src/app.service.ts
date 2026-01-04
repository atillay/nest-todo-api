import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHome() {
    return { name: 'nest-todo-api', version: '1.0.0' };
  }
}

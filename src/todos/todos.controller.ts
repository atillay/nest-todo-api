import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { TodosService } from './todos.service';
import type { Request } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
import { AddTodoDto } from './addTodo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get('')
  @UseGuards(AuthGuard)
  list(@Req() req: Request) {
    const userId = req.jwtPayload.user.id;
    return this.todosService.findAllByUserId(userId);
  }

  @Post('')
  @UseGuards(AuthGuard)
  add(@Body() addTodoDto: AddTodoDto, @Req() req: Request) {
    const userId = req.jwtPayload.user.id;
    return this.todosService.add(userId, addTodoDto.content);
  }
}

import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {

    constructor(private todoService: TodoService) { }
    @Get()
    findAll() {
        return this.todoService.getAllTodo();
    }

    @Post('create')
    async create(@Body() createTodoDto: CreateTodoDto) {
        return await this.todoService.create(createTodoDto);
    }

    @Delete(':id') 
    async delete(@Param('id') id: string) {
        return await this.todoService.deleteTodoById(id);
    }

    @Get(':id')
    async findTodoById(@Param('id') id: string) {
        return await this.todoService.getTodoById(id);
    }
}

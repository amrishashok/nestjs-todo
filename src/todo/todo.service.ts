import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from './interface/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodoService {
    constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

    public async create(createTodoDto: CreateTodoDto) {
        const createdTodo = new this.todoModel(createTodoDto);
        return await createdTodo.save();
    }

    public async getAllTodo() {
        return await this.todoModel.find().exec();
    }

    public async getTodoById(id: string) {
        return await this.todoModel.findById(id);
    }

    public async deleteTodoById(id: string) {
        return await this.todoModel.deleteOne({
            _id : id
        });
    }
}

// src/core/usecases/TodoUseCases.ts
import { ITodoRepository } from '../domain/repositories/ITodoRepository';
import { Todo } from '../domain/entities/Todo';

export class TodoUseCases {
  constructor(private todoRepository: ITodoRepository) {}

  async getAllTodos(): Promise<Todo[]> {
    return this.todoRepository.getAll();
  }

  async createTodo(title: string): Promise<Todo> {
    return this.todoRepository.create(title);
  }

  async toggleTodoCompletion(id: string): Promise<Todo> {
    const todo = await this.todoRepository.getById(id);
    if (!todo) throw new Error('Todo not found');
    return this.todoRepository.update(id, { completed: !todo.completed });
  }

  async deleteTodo(id: string): Promise<void> {
    return this.todoRepository.delete(id);
  }
}

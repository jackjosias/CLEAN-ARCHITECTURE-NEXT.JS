
// src/core/domain/repositories/ITodoRepository.ts
import { Todo } from '../entities/Todo';

export interface ITodoRepository {
  getAll(): Promise<Todo[]>;
  getById(id: string): Promise<Todo | null>;
  create(title: string): Promise<Todo>;
  update(id: string, data: Partial<Todo>): Promise<Todo>;
  delete(id: string): Promise<void>;
}

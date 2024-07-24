// src/infrastructure/repositories/PrismaTodoRepository.ts
import { ITodoRepository } from '../../core/domain/repositories/ITodoRepository';
import { Todo } from '../../core/domain/entities/Todo';
import prisma from '../database/prisma';

export class PrismaTodoRepository implements ITodoRepository {
  async getAll(): Promise<Todo[]> {
    return prisma.todo.findMany();
  }

  async getById(id: string): Promise<Todo | null> {
    return prisma.todo.findUnique({ where: { id } });
  }

  async create(title: string): Promise<Todo> {
    return prisma.todo.create({ data: { title } });
  }

  async update(id: string, data: Partial<Todo>): Promise<Todo> {
    return prisma.todo.update({ where: { id }, data });
  }

  async delete(id: string): Promise<void> {
    await prisma.todo.delete({ where: { id } });
  }
}
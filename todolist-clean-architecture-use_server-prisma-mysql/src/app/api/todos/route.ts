// src/app/api/todos/route.ts
import { NextResponse } from 'next/server';
import { TodoUseCases } from '../../../core/usecases/TodoUseCases';
import { PrismaTodoRepository } from '../../../infrastructure/repositories/PrismaTodoRepository';

const todoRepository = new PrismaTodoRepository();
const todoUseCases = new TodoUseCases(todoRepository);

export async function GET() {
  const todos = await todoUseCases.getAllTodos();
  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  const { title } = await request.json();
  const newTodo = await todoUseCases.createTodo(title);
  return NextResponse.json(newTodo);
}

export async function PUT(request: Request) {
  const { id } = await request.json();
  const updatedTodo = await todoUseCases.toggleTodoCompletion(id);
  return NextResponse.json(updatedTodo);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  await todoUseCases.deleteTodo(id);
  return NextResponse.json({ message: 'Todo deleted' });
}
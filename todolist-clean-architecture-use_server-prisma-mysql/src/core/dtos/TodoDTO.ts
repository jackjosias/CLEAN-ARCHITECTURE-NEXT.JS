// src/core/dtos/TodoDTO.ts
export interface CreateTodoDTO {
    title: string;
  }
  
  export interface UpdateTodoDTO {
    title?: string;
    completed?: boolean;
  }
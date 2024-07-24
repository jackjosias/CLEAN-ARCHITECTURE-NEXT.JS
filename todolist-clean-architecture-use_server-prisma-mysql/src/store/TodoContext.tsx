
  
  // src/store/TodoContext.tsx
  'use client'
  
  import React, { createContext, useContext, useState, useEffect } from 'react';
  import { v4 as uuidv4 } from 'uuid';
  import { Todo } from '../core/domain/entities/Todo';
  
  interface TodoContextType {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
  }
  
  const TodoContext = createContext<TodoContextType | undefined>(undefined);
  
  export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>([]);
  
    useEffect(() => {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
  
    const addTodo = (text: string) => {
      setTodos([...todos, { id: uuidv4(), text, completed: false }]);
    };
  
    const toggleTodo = (id: string) => {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ));
    };
  
    const deleteTodo = (id: string) => {
      setTodos(todos.filter(todo => todo.id !== id));
    };
  
    return (
      <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
        {children}
      </TodoContext.Provider>
    );
  };
  
  export const useTodos = () => {
    const context = useContext(TodoContext);
    if (!context) {
      throw new Error('useTodos must be used within a TodoProvider');
    }
    return context;
  };
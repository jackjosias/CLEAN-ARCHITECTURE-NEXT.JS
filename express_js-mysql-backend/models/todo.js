// models/todo.js
const { v4: uuidv4 } = require('uuid');
const pool = require('../config/database');

const createTodoTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS Todo (
      id VARCHAR(191) NOT NULL,
      title VARCHAR(191) NOT NULL,
      completed BOOLEAN NOT NULL DEFAULT false,
      createdAt DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
      updatedAt DATETIME(3) NOT NULL,
      PRIMARY KEY (id)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
  `);
};

createTodoTable();

const getAllTodos = async () => {
  const [rows] = await pool.query('SELECT * FROM Todo');
  return rows;
};

const getTodoById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM Todo WHERE id = ?', [id]);
  return rows[0];
};

const createTodo = async (title) => {
  const id = uuidv4();
  const createdAt = new Date();
  const updatedAt = new Date();
  await pool.query('INSERT INTO Todo (id, title, completed, createdAt, updatedAt) VALUES (?, ?, false, ?, ?)', [id, title, createdAt, updatedAt]);
  return getTodoById(id);
};

const updateTodo = async (id, data) => {
  const updatedAt = new Date();
  await pool.query('UPDATE Todo SET ? WHERE id = ?', [{ ...data, updatedAt }, id]);
  return getTodoById(id);
};

const deleteTodo = async (id) => {
  await pool.query('DELETE FROM Todo WHERE id = ?', [id]);
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};

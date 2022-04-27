import { v4 as uuidv4 } from 'uuid';
import { Query } from './Query.js';
export const Mutation = {
  addTodo: (parent, { AddTodoInput }, { db }, info) => {
    const userObject = db.users.find((user) => {
      return user.id == AddTodoInput.ownerId;
    });
    if (userObject) {
      const newTodo = { id: uuidv4(), ...AddTodoInput };
      db.todos.push(newTodo);
      return newTodo;
    } else {
      throw new Error('User is not found.');
    }
  },
  updateTodo: (parent, { UpdateTodoInput }, { db }, info) => {
    let index = db.todos.findIndex((todo) => todo.id == UpdateTodoInput.id);
    if (index != -1) {
      db.todos[index] = { ...db.todos[index], ...UpdateTodoInput };
      return db.todos[index];
    } else {
      throw new Error('Todo is not found.');
    }
  },
  deleteTodo: (parent, { DeleteTodoInput }, { db }, info) => {
    let index = db.todos.findIndex((todo) => todo.id == DeleteTodoInput.id);
    if (index != -1) {
      delete db.todos[index];
      return true;
    } else {
      throw new Error('Todo is not found.');
    }
  },
};

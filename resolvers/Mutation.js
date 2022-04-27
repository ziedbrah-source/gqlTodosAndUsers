import { v4 as uuidv4 } from 'uuid';
import { Query } from './Query.js';
export const Mutation = {
  addTodo: (parent, { AddTodoInput }, { db, pubsub }, info) => {
    const userObject = db.users.find((user) => {
      return user.id == AddTodoInput.ownerId;
    });
    if (userObject) {
      const newTodo = { id: uuidv4(), ...AddTodoInput };
      db.todos.push(newTodo);
      pubsub.publish('Todo', { ...newTodo, Operation: 'Add' });
      return newTodo;
    } else {
      throw new Error('User is not found.');
    }
  },
  updateTodo: (parent, { UpdateTodoInput }, { db, pubsub }, info) => {
    let index = db.todos.findIndex((todo) => todo.id == UpdateTodoInput.id);
    if (index != -1) {
      db.todos[index] = {
        ...db.todos[index],
        ...UpdateTodoInput,
      };
      const Todo = db.todos[index];
      pubsub.publish('Todo', { ...Todo, Operation: 'Update' });
      return Todo;
    } else {
      throw new Error('Todo is not found.');
    }
  },
  deleteTodo: (parent, { DeleteTodoInput }, { db, pubsub }, info) => {
    let index = db.todos.findIndex((todo) => todo.id == DeleteTodoInput.id);
    if (index != -1) {
      const Todo = db.todos[index];
      delete db.todos[index];
      pubsub.publish('Todo', {
        ...Todo,
        Operation: 'Delete',
      });
      return true;
    } else {
      throw new Error('Todo is not found.');
    }
  },
};

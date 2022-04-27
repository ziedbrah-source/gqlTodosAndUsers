import { db } from '../data/db.js';

export const Query = {
  getUsers: () => {
    return db.users;
  },
  getTodos: () => {
    return db.todos;
  },
  getTodo: (_, { id }) => {
    return db.todos.find((todo) => todo.id == id);
  },
  getUser: (_, { id }) => {
    return db.users.find((user) => user.id == id);
  },
};

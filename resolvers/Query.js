export const Query = {
  getUsers: (_, {}, { db }) => {
    return db.users;
  },
  getTodos: (_, {}, { db }) => {
    return db.todos;
  },
  getTodo: (_, { id }, { db }) => {
    return db.todos.find((todo) => todo.id == id);
  },
  getUser: (_, { id }, { db }) => {
    return db.users.find((user) => user.id == id);
  },
};

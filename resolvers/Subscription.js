export const Subscription = {
  Todo: {
    subscribe(parent, args, { pubsub }, info) {
      return pubsub.asyncIterator('Todo');
    },
  },
};

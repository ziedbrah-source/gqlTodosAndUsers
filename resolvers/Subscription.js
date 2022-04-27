export const Subscription = {
  TodoOp: {
    subscribe(parent, args, { pubsub }, info) {
      return pubsub.asyncIterator('TodoOp');
    },
  },
};

const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("../resolver");

const apolloServer = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  subscriptions: {
    path: "/subscriptions",
    onConnect: async (connectionParams, webSocket, context) => {
      console.log(
        `Subscription client connected using Apollo server's built-in SubscriptionServer.`
      );
    },
    onDisconnect: async (webSocket, context) => {
      console.log(`Subscription client disconnected.`);
    },
  },
});

module.exports = { apolloServer };

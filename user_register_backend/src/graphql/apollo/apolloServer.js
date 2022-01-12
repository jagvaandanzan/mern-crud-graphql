const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("../resolver");

const apolloServer = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  context: () => {
    return "balabalablabla";
  },
});

module.exports = { apolloServer };

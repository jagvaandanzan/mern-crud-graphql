require("dotenv").config();

const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { apolloServer } = require("./graphql/apollo/apolloServer");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { DB_URL, PORT } = require("./constants/constants");
const { User } = require("./model/model");
const { userSchema, userResolvers } = require("./graphql/schemas/user/user");
const { typeDefs, resolvers } = require("./graphql/resolver");

const port = 8080;

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function startApolloServer() {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.listen({ port }, () =>
    console.log(
      `Server ready at http://localhost:${port}${apolloServer.graphqlPath}`
    )
  );
}

startApolloServer();

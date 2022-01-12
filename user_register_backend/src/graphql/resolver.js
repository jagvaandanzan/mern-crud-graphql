const { merge } = require("lodash");
const { userSchema, userResolvers } = require("./schemas/user/user");

const typeDefs = [userSchema];
const resolvers = merge(userResolvers);

module.exports = {
  typeDefs,
  resolvers,
};

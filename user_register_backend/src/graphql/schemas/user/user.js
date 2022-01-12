const { gql } = require("apollo-server-express");

const userSchema = gql`
  type Query {
    getUser(
      _id: ID
      firstName: String
      lastName: String
      age: Int
      phone: Int
      email: String
      register: String
    ): User
  }
  type Mutation {
    createUser(
      firstName: String
      lastName: String
      age: Int
      phone: Int
      email: String
      register: String
    ): User
    updateUser(
      _id: ID!
      firstName: String
      lastName: String
      age: Int
      phone: Int
      email: String
      register: String
    ): User
    deleteUser(_id: ID): ID
  }
  type User {
    _id: ID
    firstName: String
    lastName: String
    age: Int
    phone: Int
    email: String
    register: String
  }
`;

const userResolvers = {
  Query: {
    getUser: require("../../queries/getUser"),
  },
  Mutation: {
    createUser: require("../../mutations/user/createUser"),
    updateUser: require("../../mutations/user/updateUser"),
    deleteUser: require("../../mutations/user/deleteUser"),
  },
};

module.exports = { userSchema, userResolvers };

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type Query: {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => "hello world",
  },
};

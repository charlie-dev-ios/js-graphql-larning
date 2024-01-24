const typeDefs = `#graphql
  Query: {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => "hello world",
  },
};

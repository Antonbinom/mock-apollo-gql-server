import { ApolloServer } from "apollo-server";
import typeDefs from "./src/schema";
import resolvers from "./src/resolvers";
import { config } from "dotenv";
config();

const port = process.env.PORT;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen({ port })
  .then(({ url }) => console.log(`Server Running on port ${url}`));

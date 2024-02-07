import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    password: String!
    image: String
    balance: String
    description: String
    contacts: [String!]!
  }

  type Transaction {
    id: ID!
    amount: Int!
    debit: Int!
    message: String
    sender: User!
    recipient: User!
    created_at: String!
  }

  type Query {
    allUsers: [User!]!
    user(id: ID!): User
    allTransactions(userId: ID!): [Transaction!]!
    transaction(id: ID!): Transaction
    allUserTransactions(userId: ID!): [Transaction!]!
    allUserContacts(userId: ID!): [User!]!
  }
`;

export default typeDefs;

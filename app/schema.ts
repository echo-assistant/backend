import TransactionsSchema from "./transactions/transactions-schema";
import { makeExecutableSchema } from "graphql-tools";
import { gql } from "apollo-server-express";

const Query = gql`
  type Query {
    hello: String
    getTransactions(): [Transaction]
  }
`;

export default {
  typeDefs: [Query, TransactionsSchema],
  resolvers: {}
};

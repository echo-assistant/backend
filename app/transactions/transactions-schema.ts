import { gql } from "apollo-server-express";

export default gql`
  type Transaction {
    amount: Float
    tags: String
  }
`;

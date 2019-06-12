import * as express from "express";
import * as bodyParser from "body-parser";
import { RequestHandlerParams } from "express-serve-static-core";

import { ApolloServer, gql } from "apollo-server-express";

import schema from "./schema";

class App {
  public app: express.Application;
  public server: ApolloServer;

  constructor() {
    this.app = express();
    this.server = new ApolloServer(schema);
    this.runConfig();
  }

  runConfig(): void {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.server.applyMiddleware({ app: this.app });

    console.log(`GraphQL running on ${this.server.graphqlPath}`);
  }
}

export default new App().app;

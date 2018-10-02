import * as express from 'express';
import * as bodyParser from 'body-parser';
import {RequestHandlerParams} from "express-serve-static-core";

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.runConfig();
    }

    runConfig(): void {
       this.app.use(bodyParser.urlencoded({ extended: true }));
       this.app.use(bodyParser.json());
    }
}

export default new App().app;

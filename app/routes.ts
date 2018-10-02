import * as express from 'express';

class Router {
 router: express.Router;

 constructor(router: express.Router) {
  this.router = router;
 }
}

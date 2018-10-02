import { Request, Response, Router, Application } from 'express';

// import TransactionsController from './Controllers';

// TODO
const router = Router();

router.get('/', ((req: Request, res: Response) => {
    res.json({ message: 'Hello!'})
}));

class BaseRouter {
    public routes(app: Application) {
        app.use('/api', router)
    }
}

export default new BaseRouter()

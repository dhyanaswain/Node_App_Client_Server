import { Router } from 'express';
import { Request, Response } from 'express-serve-static-core';

export class BaseRouter {
    public static init(router: Router): Router {
        router.post('/server', BaseRouter.serverResult);

        return router;
    }

    public static serverResult(req: Request, res: Response): Response {

        res.send({
            node: 6,
        });
        return res.status(204).json();
    }
}

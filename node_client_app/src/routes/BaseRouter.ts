import { Router, Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

export class BaseRouter {
    public static init(router: Router): Router {
        router.get('/client', BaseRouter.clientResult);
        router.post('/server', BaseRouter.sendServer);

        return router;
    }

    public static clientResult(req: Request, res: Response): Response {
        return res.status(204).json({});
    }

    public static sendServer = async (req: Request, res: Response, next: NextFunction) => {
        // get the post
        // console.log(req);
        // const message: string = req.body.massage;
        const response: AxiosResponse = await axios.post(`http://localhost:3000/server`, {
            // message,
        });
        // return response
        return res.status(200).json({
            message: response.data,
        });
    };
}

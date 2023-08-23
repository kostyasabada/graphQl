import express, { Request, Response, Router } from 'express';
import { inject, injectable } from 'inversify';
import chalk from 'chalk';
import cors from 'cors';
import { createServer } from 'http';

import { errorMiddleware } from './middlewares/error';
import { IController } from './interfaces';
import { TYPES } from './@types';

@injectable()
class Server {
  private _baseRouter: IController;

  constructor(
    @inject(TYPES.BaseController) baseRouter: IController,

  ) {
    this._baseRouter = baseRouter;
  }


  createApp(app: any, baseRouter: Router, errorMiddleware: any) {
    app.use(
      cors({
        exposedHeaders: 'jwt-token',
      })
    );
    app.use(express.urlencoded({ extended: true, limit: '50MB' }));

    app.use(express.json({ limit: '2MB' }));

    app.use(express.static(__dirname + '/public'));

    app.use('/api', baseRouter);

    app.get('*', (req: Request, res: Response) => {
      res.sendFile(__dirname + '/public/index.html');
    });

    app.use(errorMiddleware);


    return app;
  }

  async start() {
    try{
      // Create and start the server

      console.log('STARTTTTT');
      
      const port = Number(process.env.PORT || 8081);

      const app = this.createApp(express(), this._baseRouter.getRouter(), errorMiddleware);

      const server = createServer(app);


      server.listen(port, () => {console.log(`${chalk.green('Express server started')} on port: ${port}`)})

    } catch (e) {
      console.log(e);
      
    }

  }
}

export interface IServer {
  createApp(app: any, baseRouter: Router, errorMiddleware: any): any;
  start(): Promise<void>;
}

export { Server };
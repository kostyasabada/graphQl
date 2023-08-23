import 'reflect-metadata';
import commandLineArgs from 'command-line-args';
import { diContainer } from './inversify.config';
import loadEnv from './LoadEnv';
import { IServer } from './Server';
import { TYPES } from './@types';

loadEnv(
    commandLineArgs([
      {
        name: 'env',
        alias: 'e',
        defaultValue: 'default',
        type: String,
      },
    ])
  );

const serverInstance = diContainer.get<IServer>(TYPES.Server);
serverInstance.start();


  // async function Start() {
  //   const diContainer = await (await import('./inversify.config')).diContainer;
  //   console.log('Serverrrrrrrrrrrrrrrrrr');
    
  //   const server = diContainer.get<IServer>(TYPES.Server);
  //   server.start();
  // }

  // Database.createConnection().then(
  //   async () => {
  //   Start();
  //   Database.insertDBRecords();
  // }
  // )

  // Start()
//    Database.createConnection().then(async () => {
//    const diContainer = await (await import('./inversify.config')).diContainer;
//    const server = diContainer.get<IServer>(TYPES.Server);
//    server.start();
//  })
  
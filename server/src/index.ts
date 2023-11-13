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

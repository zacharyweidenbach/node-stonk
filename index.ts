import * as http from 'http';

import { bootstrap } from './src/bootstrap';

// Create an instance of the http server to handle HTTP requests
export const app = http.createServer((_req: any, _res: any) => {});

const start = () => {
  // Start the server on port 3000
  app.listen(3000, '127.0.0.1');
  console.log('Node server running on port 3000');

  bootstrap();
};

start();

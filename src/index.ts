import express from 'express';
import configServer, { server } from './configServer';
import routes from './routes';
import { connectDB } from './configServer/mongodb';
//import cluster from 'cluster';

const app = express();

try {
  await connectDB();
  configServer(app);
  await routes(app);

  /*   
   const numCpus = require('os').cpus().length;
   
   if(cluster.isPrimary) {
     for (let i = 0; i < numCpus; i++) {
       cluster.fork();
     }
 
     return;
   }
 */

  const expressServer = app.listen(server.PORT, server.HOST, () => {
    console.log(`App listening server on http://${server.HOST}:${server.PORT}`);
  });

  expressServer.on("error", error => {
    console.error(error);
  });
} catch (error) {
  console.error(error);
}

export default app;
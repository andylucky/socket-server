import Server from './classes/server';
import { SERVER_PORT } from './global/environment';
import router  from './routes/router';
import cors from 'cors';

import bodyParser, { urlencoded } from 'body-parser';


     const server = new Server();

    //importante usar antes de la configuracion de las rutas
    //BodyParser
    server.app.use( bodyParser.urlencoded({ extended: true}));

    //aqui se pasa la peticion de un formato json
    server.app.use( bodyParser.json() );

    //CORS
    server.app.use(cors({ origin : true, credentials: true}))

     server.app.use('/', router)

     server.inicio(() =>{
         console.log(`servidor corriendo en puerto ${SERVER_PORT}`);

     })


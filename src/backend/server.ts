import { Server } from 'hapi';
import { routes } from './routes';

const server = new Server();
server.connection({
    host: 'localhost',
    port: 8000
});

routes.forEach(route => server.route(route));

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }

    console.log(`Server running at: ${server.info.uri}`);
});

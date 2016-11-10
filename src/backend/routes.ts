import { IRouteConfiguration } from 'hapi';
import { checkPath } from './paths/check-path';

export const routes: IRouteConfiguration[] = [
    {
        method: 'GET',
        path: '/health',
        handler: (req, reply) => reply('OK')
    },
    {
        method: 'POST',
        path: '/check-path',
        handler: checkPath
    }
];

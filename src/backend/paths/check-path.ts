import * as fs from 'async-file';
import { CheckPathModel } from '../../shared/model/check-path.model';

export async function checkPath(req, reply) {
    const path = req.payload.path;
    let exists = false;
    if (!path) {
        return reply(new CheckPathModel(exists, false));
    }
    exists = await fs.exists(path);
    if (!exists) {
        return reply(new CheckPathModel(exists, false));
    }
    const stats = await fs.stat(path);

    reply(new CheckPathModel(exists, stats.isDirectory()));
};

import * as fs from 'async-file';

export async function checkPath(req, reply) {
    const path = req.payload.path;
    let exists = false;
    if (!path) {
        return reply({ exists });
    }
    exists = await fs.exists(path);
    if (!exists) {
        return reply({ exists });
    }
    const stats = await fs.stat(path);

    reply({
        exists,
        isDirectory: stats.isDirectory()
    });
};

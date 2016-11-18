import * as fs from 'async-file';
import { join } from 'path';
import { CheckPathModel } from '../../shared/model/check-path.model';

export async function checkPath(req, reply) {
    const path: string = req.payload.path;
    let exists = false;
    if (!path) {
        // Case 1: Path isn't specified
        return reply(new CheckPathModel(exists, false, false));
    }
    exists = await fs.exists(path);
    if (!exists) {
        // Case 2: Path is specifed, but file doesn't exist.
        return reply(new CheckPathModel(exists, false, false));
    }

    const isProGenFilePath = /\.rapid-pro\.json$/.test(path);
    if (isProGenFilePath) {
        // Case 3: An existing rapid-pro config file is specified.
        return reply(new CheckPathModel(exists, false, true));
    }
    const isDirectory = (await fs.stat(path)).isDirectory();
    const rapidProChildExists = await fs.exists(join(path, '.rapid-pro.json'));
    if (isDirectory && rapidProChildExists) {
        // Case 4: An existing project with a rapid-pro config file is specified.
        return reply(new CheckPathModel(exists, false, true));
    }

    const isEmpty = (await fs.readdir(path)).length === 0;
    if (isEmpty && isDirectory) {
        // Case 5: An empty directory path was passed in.
        return reply(new CheckPathModel(exists, true, false));
    }

    // Case 6: Valid file, but populated directory with no config file.
    return reply(new CheckPathModel(exists, false, false));
};

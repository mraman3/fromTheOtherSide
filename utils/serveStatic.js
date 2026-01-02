
import path from 'path';
import fs from 'fs/promises';
import { sendResponse } from './sendRespone.js';

export async function serveStatic(req, res, baseDir) {
    const filePath = path.join(baseDir, 'public', 'index.html');

    try {
        const content = await fs.readFile(filePath);
        sendResponse(res, 200, 'text/html', content)
    } catch (error) {
        console.log(error)
    }

}

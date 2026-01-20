
import path from 'path';
import fs from 'fs/promises';
import { sendResponse } from './sendRespone.js';
import { getContentType } from './getContentType.js';

export async function serveStatic(req, res, baseDir) {
    const filePath = path.join(baseDir, 'public', 'index.html');

    const publicDir = path.join(baseDir, 'public');
    const pathToResource = path.join(
        publicDir,
         req.url === '/' ? 'index.html' : req.url);

        
    try {
        const content = await fs.readFile(pathToResource);

        const ext = path.extname(pathToResource);

        const contentType = getContentType(ext);

        sendResponse(res, 200, contentType, content)
    } catch (error) {
        console.log(error)
    }

}


import path from 'path';
import fs from 'fs/promises';
import { sendResponse } from './sendRespone.js';
import { getContentType } from './getContentType.js';

export async function serveStatic(req, res, baseDir) {
    const publicDir = path.join(baseDir, 'public');
    const filePath = path.join(
        publicDir,
         req.url === '/' ? 'index.html' : req.url);

        
    try {
        const content = await fs.readFile(filePath);

        const ext = path.extname(filePath);

        const contentType = getContentType(ext);

        sendResponse(res, 200, contentType, content)
    } catch (error) {
        console.log(error)
    }

}

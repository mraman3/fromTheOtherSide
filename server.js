import http from 'http'
import { serveStatic } from './utils/serveStatic.js'
import fs from 'fs/promises'

const PORT = 8000

const __dirname = import.meta.dirname


const server = http.createServer(async (req, res) => {

    await serveStatic(req, res ,__dirname)
})

server.listen(PORT, ()=>{
    console.log(`Connected on port:  ${PORT}`)

})



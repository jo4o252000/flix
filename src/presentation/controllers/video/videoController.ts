import { Request, Response } from "express";
import { SaveNewVideo } from "../../../use_cases/media/SaveNewVideo";
import Busboy from 'busboy';
import fs from "fs";
import path from 'path';

export class VideoController {
    constructor (private saveNewVideo: SaveNewVideo) {}

    async saveVideo(req: Request, res: Response) {
        const busboy = Busboy({headers: req.headers})
        let videoPath:any;
        let bodyVideo: any = {};
        let categories: any = []

        busboy.on('file', (fieldname:any, file:any, filename:any) => {
            const fileName = filename
            videoPath = path.join('src/upload', fileName.filename)

            const writeStream = fs.createWriteStream(videoPath);

            file.pipe(writeStream);

            writeStream.on('finish', () => {
                console.log(`Arquivo salvo com sucesso: ${filename}`)
            })

            writeStream.on('error', (err) => {
                console.log('Erro ao salvar arquivo', err);
                res.status(500).json({status:500, message:"Erro ao salvar arquivo"})
            })
        })

        busboy.on('field', (fieldname, value) => {
            bodyVideo[fieldname] = value
            if(fieldname === 'categories'){
                const categoriesMedia = value.split(',')//quando o front estiver pronto remover esse split
                categories = categoriesMedia;
            }
        })

        busboy.on('finish', async () => {
            try {
                if (videoPath) {
                    await this.saveNewVideo.execute(videoPath, bodyVideo, categories);
                    res.send("Arquivo enviado e salvo com sucesso");
                } else {
                    res.status(400).send("Nenhum arquivo enviado");
                }
            } catch (error) {
                console.error('Erro ao executar o caso de uso:', error);
                res.status(500).send('Erro ao processar o vídeo');
            }
        })
        
        req.pipe(busboy)
    }
}
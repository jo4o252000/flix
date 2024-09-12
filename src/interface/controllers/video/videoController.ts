import { Request, Response } from "express";
import { SaveNewVideo } from "../../../use_cases/SaveNewVideo";
import ffmpeg from "fluent-ffmpeg";

export class VideoController {
    constructor (private saveNewVideo: SaveNewVideo) {}

    async saveVideo(req: Request, res: Response) {
        const videoPath = req.file?.path || '';
        ffmpeg.ffprobe(videoPath, (err, metadata) => {
            if (err) {
                return res.status(500).send('Erro ao extrair metadados');
            }
          
             
            res.json(metadata);
        })

        await this.saveNewVideo.execute();
    }
}
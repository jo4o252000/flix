import { Request, Response } from "express";
import { SaveNewVideo } from "../../../use_cases/SaveNewVideo";

export class VideoController {
    constructor (private saveNewVideo: SaveNewVideo) {}

    async saveVideo(req: Request, res: Response) {
        const videoPath = req.file?.path || '';
        const bodyVideo = req.body;
        
        await this.saveNewVideo.execute(videoPath, bodyVideo);
        res.send("sajhndfiashnfahsf")
    }
}
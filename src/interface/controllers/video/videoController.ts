import { Request, Response } from "express";
import { SaveNewVideo } from "../../../use_cases/SaveNewVideo";

export class VideoController {
    constructor (private saveNewVideo: SaveNewVideo) {}

    async saveVideo(req: Request, res: Response) {
        const videoPath = req.file?.path || '';
        
        await this.saveNewVideo.execute(videoPath);
        res.send("sajhndfiashnfahsf")
    }
}
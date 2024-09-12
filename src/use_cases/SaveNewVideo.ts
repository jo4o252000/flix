import { VideoRepository } from "../domain/interfaces/VideoRepository";

export class SaveNewVideo{
    constructor(private videoRepository: VideoRepository) {}

    async execute(){
        console.log("execute")
        return await this.videoRepository.create();
    }
}
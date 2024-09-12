import { VideoRepository } from "../domain/interfaces/VideoRepository";
import {decoderVideo} from '../utils/decoderVideo'


export class SaveNewVideo{
    constructor(private videoRepository: VideoRepository) {}

    async execute(videoPath:any){
        const metadata = await decoderVideo(videoPath)


        const streamsMetaData = metadata.streams[0];
        const formatMetaData = metadata.format;
        
        const videoMetadata = {
            video_widht: streamsMetaData?.width,
            video_height: streamsMetaData?.height,
            video_duration: formatMetaData?.duration,
            video_size: formatMetaData?.size
        }

        return await this.videoRepository.create(videoMetadata);
    }
}
import { VideoRepository } from "../domain/interfaces/VideoRepository";
import {decoderVideo} from '../utils/decoderVideo'
import { IVideoMetadata } from "../domain/interfaces/VideoRepository";


export class SaveNewVideo{
    constructor(private videoRepository: VideoRepository) {}

    async execute(videoPath:any, videoMetadata: IVideoMetadata){
        const metadata = await decoderVideo(videoPath)

        const streamsMetaData = metadata.streams[0];
        const formatMetaData = metadata.format;

        videoMetadata["videoWidht"] = streamsMetaData?.width
        videoMetadata["videoHeight"] = streamsMetaData?.height
        videoMetadata["videoDuration"] = streamsMetaData?.duration
        videoMetadata["videoSize"] = formatMetaData?.size

        return await this.videoRepository.create(videoMetadata);
    }
}
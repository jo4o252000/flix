import { VideoRepository, IVideoMetadata } from "../../domain/interfaces/IVideoRepository";
import {decoderVideo} from '../../utils/decoderVideo';


export class SaveNewVideo{
    constructor(private videoRepository: VideoRepository) {}

    async execute(videoPath:any, videoMetadata: IVideoMetadata, categories:any){
        const metadata = await decoderVideo(videoPath)
        const streamsMetaData = metadata.streams[0];
        const formatMetaData = metadata.format;

        videoMetadata["video_widht"] = streamsMetaData?.width
        videoMetadata["video_height"] = streamsMetaData?.height
        videoMetadata["duration"] = formatMetaData?.duration
        videoMetadata["size"] = formatMetaData?.size
        videoMetadata["path"] = formatMetaData?.filename

        return await this.videoRepository.create(videoMetadata, categories);
    }
}
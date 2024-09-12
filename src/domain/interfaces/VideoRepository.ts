import {Video} from '../entities/video';

export interface VideoRepository{
    create(videoMetadata:any): Promise<Video>;
}

export interface IVideoMetadata{
    name: string,
    description: string,
    pathVideo: string,
    releaseDate: Date,
    videoWidht: number,
    videoHeight: number,
    videoDuration: number,
    videoSize: number
}
import {Video} from '../entities/video';

export interface VideoRepository{
    create(videoMetadata:any): Promise<Video>;
}

export interface IVideoMetadata{
    name: string,
    description: string,
    path: string,
    videoWidht: number,
    videoHeight: number,
    videoDuration: number,
    videoSize: number
    
}
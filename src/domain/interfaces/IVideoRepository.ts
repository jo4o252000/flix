import {Video} from '../entities/video';

export interface VideoRepository{
    create(videoMetadata:any, categories:any): Promise<Video>;
}

export interface IVideoMetadata{
    name: string,
    description: string,
    path: string,
    video_widht: number,
    video_height: number,
    duration: number,
    size: number
}
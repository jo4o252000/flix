import {Video} from '../entities/video';

export interface VideoRepository{
    create(videoMetadata:any, categories:any): Promise<Video>;
    get(categoryFilme:string): Promise<any>;
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
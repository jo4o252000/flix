import {Video} from '../entities/video';

export interface VideoRepository{
    create(videoMetadata:any): Promise<Video>;
}
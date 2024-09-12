import {Video} from '../entities/video';

export interface VideoRepository{
    create(): Promise<Video>;
}
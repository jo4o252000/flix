import {Video} from "../../domain/entities/video";
import {VideoRepository} from "../../domain/interfaces/VideoRepository";

//AQUI QUE VAI INTERAGIR COM O BANCO
export class InMemoryVideoRepository implements VideoRepository{
    private video: Video = {
        id:"123",
        name:"test",
        releaseDate: new Date,
        video:'sjdfnhas'
    };

    async create(videoMetadata:any): Promise<Video> {
        console.log("chegou aqui", videoMetadata)
        return this.video;
    }
}
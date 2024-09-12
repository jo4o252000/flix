import {VideoRepository} from "../../domain/interfaces/VideoRepository";

//AQUI QUE VAI INTERAGIR COM O BANCO
export class InMemoryVideoRepository implements VideoRepository{
    async create(videoMetadata:any): Promise<any> {
        console.log("chegou aqui", videoMetadata)
        
    }
}
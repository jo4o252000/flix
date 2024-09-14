import {VideoRepository} from "../../../domain/interfaces/IVideoRepository";

//AQUI QUE VAI INTERAGIR COM O BANCO
export class InMemoryVideoRepository implements VideoRepository{
    async create(videoMetadata:any): Promise<any> {
         
    }
}
import {VideoRepository} from "../../domain/interfaces/VideoRepository";
import Categories from "../models/media/MediaModels";

//AQUI QUE VAI INTERAGIR COM O BANCO
export class InMemoryVideoRepository implements VideoRepository{
    async create(videoMetadata:any): Promise<any> {
         
    }
}
import { IMediaCategories, IDataMediaCategories } from "../../domain/interfaces/IMediaCategories";

export class SaveNewCategories{
    constructor(private mediaCategories: IMediaCategories){}

    async execute(category:IDataMediaCategories){
        return await this.mediaCategories.create(category)
    }
}
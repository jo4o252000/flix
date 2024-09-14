import MediaCategories from '../../../domain/entities/MediaCategories';
import {IMediaCategories, IDataMediaCategories} from '../../../domain/interfaces/IMediaCategories';
import Categories from '../../models/media/CategoriesModel'


export class MediaCategoriesRepository implements IMediaCategories{
    async create(nameCategory: any): Promise<any> {
        console.log(nameCategory)
        const createNewCategory = await Categories.create(nameCategory) 
        return createNewCategory;
    }

    async delete(idCategory: string): Promise<any> {
        
    }

    async update(idCategory: string): Promise<any> {
        
    }
}
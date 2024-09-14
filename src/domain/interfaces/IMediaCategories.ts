import MediaCategories from '../entities/MediaCategories'


export interface IMediaCategories{
    create(nameCategory:IDataMediaCategories): Promise<any>;
    delete(idCategory:string): Promise<any>;
    update(idCategory:string): Promise<any>;
}

export interface IDataMediaCategories{
    name:string
}

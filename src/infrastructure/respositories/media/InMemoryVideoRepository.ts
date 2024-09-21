import {VideoRepository} from "../../../domain/interfaces/IVideoRepository";
import Media  from "../../models/media/mediaModel";
import Categories  from "../../models/media/CategoriesModel";
import sequelizeConnect from "../../db/mysql/connect";
import { QueryTypes } from "sequelize";
import { MediaCategory } from "../../models";

//AQUI QUE VAI INTERAGIR COM O BANCO
export class InMemoryVideoRepository implements VideoRepository{
    async create(videoMetadata:any, categories:any): Promise<any> {
         const saveNewVideo = await Media.create(videoMetadata);

         if(saveNewVideo.dataValues.media_id && categories){
            for(let category of categories){
                const pkCategory = await Categories.findByPk(category);

                if(pkCategory){
                    await sequelizeConnect.query(
                        `INSERT INTO media_categories (media_id, category_id) VALUES (${saveNewVideo.dataValues.media_id}, ${category})`,
                        {
                            replacements: [saveNewVideo.dataValues.media_id, category],
                            type:QueryTypes.INSERT
                        }
                    )
                }
            }
         }
         console.log(saveNewVideo.dataValues.media_id)         
    }
    async get(categoryFilme: string): Promise<any> {
        if(categoryFilme === 'all'){
            const films = await Media.findAll();

            return films
        }

        const filmsSelectCategory = await Media.findAll({
            include: [{
                model: MediaCategory,
                as: 'MediaCategories',
                where: {category_id: categoryFilme},
                required: true
            }]
        })

        return filmsSelectCategory.map(films => films.dataValues)
    }
}
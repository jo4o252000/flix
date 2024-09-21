import Media from './media/mediaModel';
import Categories from './media/CategoriesModel';
import MediaCategory from './media/mediaCategoriesModel';
import sequelizeConnect from '../db/mysql/connect';

MediaCategory.belongsTo(Media, { foreignKey: 'media_id', as: 'Media' });
MediaCategory.belongsTo(Categories, { foreignKey: 'category_id' });
Media.hasMany(MediaCategory, { foreignKey: 'media_id', as: 'MediaCategories' });
Categories.hasMany(MediaCategory, { foreignKey: 'category_id' });

sequelizeConnect.sync({force: false})
    .then(() => {
        console.log('Banco de dados sincronizado!');
    })
    .catch(err => {
        console.error('Erro ao sincronizar o banco de dados:', err);
    });
    
export {
    Media, 
    Categories,
    MediaCategory
}
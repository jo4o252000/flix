import Media from './media/mediaModel';
import Categories from './media/CategoriesModel';
import MediaCategory from './media/mediaCategoriesModel';
import sequelizeConnect from '../db/mysql/connect';

Media.belongsToMany(Categories, {
    through: MediaCategory,
    foreignKey: 'media_id',
    otherKey: 'category_id'
});

Categories.belongsToMany(Media, {
    through: MediaCategory,
    foreignKey: 'category_id',
    otherKey: 'media_id'
})

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
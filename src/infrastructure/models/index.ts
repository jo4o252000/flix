import Media from './media/mediaModel';
import Categories from './media/CategoriesModel';
import MediaCategory from './media/mediaCategoriesModel';

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
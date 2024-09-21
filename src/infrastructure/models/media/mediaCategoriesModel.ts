import { DataTypes, Model } from 'sequelize';
import sequelizeConnect from '../../db/mysql/connect'
import Media from './mediaModel';
import Categories from './CategoriesModel';

class MediaCategory extends Model {}

MediaCategory.init({
    media_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: Media,
          key: 'media_id'
        },
        onDelete: 'CASCADE'
      },
      category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: Categories,
          key: 'category_id'
        },
        onDelete: 'CASCADE'
      }
}, {
    sequelize: sequelizeConnect,
    tableName: 'media_categories',
    timestamps: false, 
    
});

export default MediaCategory;

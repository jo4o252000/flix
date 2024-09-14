import { DataTypes, Model } from 'sequelize';
import sequelizeConnect from '../../db/mysql/connect'

class MediaCategory extends Model {}

MediaCategory.init({
    media_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    }
}, {
    sequelize: sequelizeConnect,
    modelName: 'MediaCategory',
    tableName: 'media_categories',
    timestamps: false, 
    underscored: true 
});

export default MediaCategory;

import {DataTypes, Model} from 'sequelize';
import sequelizeConnect from '../../db/mysql/connect'

class Categories extends Model{}

Categories.init(
    {
        category_id: {
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        }
    }, {
        sequelize: sequelizeConnect,
        modelName: 'categories',
        tableName: 'categories',
        timestamps: false,
        underscored: true
    }
)

export default Categories;
import {DataTypes, Model} from 'sequelize';
import sequelizeConnect from '../../db/mysql/connect'


class Media extends Model{};

Media.init(
    {
        media_id: { 
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        path: {
            type: DataTypes.STRING,
            allowNull:false
        },
        video_widht: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        video_height: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        size: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        release_date: {
            type: DataTypes.DATEONLY
        },
        media_type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize: sequelizeConnect,
        modelName: 'media',
        tableName: 'media',
        timestamps: true,
        underscored: true
    }
)

export default Media
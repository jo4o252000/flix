import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelizeConnect = new Sequelize(
    process.env.DATABASE_NAME || '', 
    process.env.USERNAME_DATABASE || '', 
    process.env.PASSWORD_DATABASE || '', 
    {
        host: process.env.DATABASE_HOST || 'localhost',
        dialect: 'mysql',
        port:3307, 
    }
);

export async function mysqlConnect() {
    const sequelizeConnect = new Sequelize(
        process.env.DATABASE_NAME || '', 
        process.env.USERNAME_DATABASE || '', 
        process.env.PASSWORD_DATABASE || '', 
        {
            host: process.env.DATABASE_HOST || 'localhost',
            dialect: 'mysql',
            port:3307, 
        }
    );
    try {
        await sequelizeConnect.authenticate();
        console.log('Conexão com o banco de dados MySQL feita com sucesso.');
        sequelizeConnect.sync({alter:true})
        .then(() => {
            console.log('Modelos sincronizados com o banco de dados.');
        })
        .catch(error => {
            console.error('Erro ao sincronizar os modelos:', error);
        });
    } catch (error) {
        console.error(`Falha na conexão com o banco de dados: ${error}`);
        throw error; 
    }
}

export default sequelizeConnect;

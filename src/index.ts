import  express  from "express";
import { videoRoutes } from "./presentation/routes/media/videoRoutes";
import cors from 'cors';
import {errorHandler} from './presentation/middleware/errorHandler';
import dotenv from 'dotenv';
import {mysqlConnect} from './infrastructure/db/mysql/connect';
import {routes} from './presentation/routes/routes'
import setupSwagger from './infrastructure/swagger/swagger'


const app = express();
dotenv.config();

app.use(express.json());
app.use(cors({origin:"*"}));
app.use(errorHandler)
setupSwagger(app)

routes(app);

const PORT = process.env.PORT_API;

inicialize();

async function inicialize () {
    await mysqlConnect();

    app.listen(PORT, () => {
        console.log(`servidor rodando no endereço http://localhost:${PORT}`)
    })        
}

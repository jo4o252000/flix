import  express  from "express";
import { videoRoutes } from "./interface/routes/videoRoutes";
import cors from 'cors';
import {errorHandler} from './interface/middleware/errorHandler';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors({origin:"*"}));
app.use("/api", videoRoutes);
app.use(errorHandler)

const PORT = process.env.PORT_API;

app.listen(PORT, () => {
    console.log(`servidor rodando no enderaço http://localhost:${PORT}`)
})

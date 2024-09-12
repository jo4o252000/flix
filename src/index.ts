import  express  from "express";
import { videoRoutes } from "./interface/routes/videoRoutes";
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors({origin:"*"}));
app.use("/api", videoRoutes);

const PORT = 4010;

app.listen(PORT, () => {
    console.log(`servidor rodando no enderaço http://localhost:${PORT}`)
})

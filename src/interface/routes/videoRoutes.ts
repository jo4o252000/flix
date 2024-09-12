import { Router } from "express";
import { InMemoryVideoRepository } from "../../infrastructure/respositories/InMemoryVideoRepository";
import { SaveNewVideo } from "../../use_cases/SaveNewVideo";
import { VideoController } from "../controllers/video/videoController";

const router = Router();
import multer from "multer";

const upload = multer({dest:'src/filmes'})

 
const bookRepository = new InMemoryVideoRepository();
const saveNewVideo = new SaveNewVideo(bookRepository);
const videoController = new VideoController(saveNewVideo);

router.get("/video", upload.single('uploaded_file'), (req, res) => videoController.saveVideo(req, res));

export {router as videoRoutes}

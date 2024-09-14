import { Router } from "express";
import { InMemoryVideoRepository } from "../../../infrastructure/respositories/media/InMemoryVideoRepository";
import { SaveNewVideo } from "../../../use_cases/media/SaveNewVideo";
import { VideoController } from "../../controllers/video/videoController";

const router = Router();

const bookRepository = new InMemoryVideoRepository();
const saveNewVideo = new SaveNewVideo(bookRepository);
const videoController = new VideoController(saveNewVideo);

router.post("/api/video/update", (req, res) => videoController.saveVideo(req, res));

export {router as videoRoutes}

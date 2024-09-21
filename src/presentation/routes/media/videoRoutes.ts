import { Router } from "express";
import { InMemoryVideoRepository } from "../../../infrastructure/respositories/media/InMemoryVideoRepository";
import { FilmsUseCase } from "../../../use_cases/media/filmsUseCase";
import { VideoController } from "../../controllers/video/videoController";

const router = Router();

const bookRepository = new InMemoryVideoRepository();
const saveNewVideo = new FilmsUseCase(bookRepository);
const videoController = new VideoController(saveNewVideo);

router.post("/api/video/update", (req, res) => videoController.saveVideo(req, res));
router.get("/api/films", (req, res) => videoController.getVideo(req, res))

export {router as videoRoutes}

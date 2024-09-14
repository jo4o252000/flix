import { Router } from "express";
import {MediaCategoriesRepository} from '../../../infrastructure/respositories/media/MediaCategoriesRepository';
import {SaveNewCategories} from '../../../use_cases/media/SaveNewCategories';
import {CategoryController} from '../../controllers/video/mediaCategoriesController';

const router = Router();

const categoriesRepository = new MediaCategoriesRepository();
const saveNewCategories = new SaveNewCategories(categoriesRepository)
const mediaCategoriesController = new CategoryController(saveNewCategories);

router.post("/api/new/category", (req, res) => mediaCategoriesController.saveCategories(req, res));

export {router as categoriesRoutes}

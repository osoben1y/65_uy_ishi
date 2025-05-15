import { Router } from "express";
import { ArticleController } from "../controllers/article.controller.js";
import { detector } from "../middlewares/deviceDetector.js";

const router = Router();
const controller = new ArticleController();

router
    .post('/', detector, controller.createAtricle)
    .get('/:id', detector, controller.getArticleByUserId)
    .get('/', controller.getArticleForm)

export default router;
import { Router } from 'express'
import { UserController } from '../controllers/users.controller.js'
import { detector } from "../middlewares/deviceDetector.js";

const router = Router();
const controller = new UserController();

router
    .post('/', detector, controller.createUser)
    .get('/', controller.getUser)

export default router;

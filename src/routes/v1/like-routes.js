import express from "express";
import { like } from "../../controllers/like-controller.js";
import { authenticate } from "../../middlewares/authenticate.js";

const likeRouter = express.Router();

likeRouter.post('/',authenticate, like);

export default likeRouter;
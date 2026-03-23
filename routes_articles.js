import express from "express";
import * as controller from "../controllers/controllers_articles.js";
import { articleValidator } from "../validateurs/validateur_article.js";
import { validate } from "../middlewares/middle_validation.js";

const router = express.Router();

router.post("/articles", articleValidator, validate, controller.createArticle);
router.get("/articles", controller.getArticles);
router.get("/articles/:id", controller.getArticle);
router.put("/articles/:id", articleValidator, validate, controller.updateArticle);
router.delete("/articles/:id", controller.deleteArticle);

export default router;

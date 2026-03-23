import { body } from "express-validator";

export const articleValidator = [
	body("titre").notEmpty().withMessage("Titre requis"),
	body("contenu").notEmpty().withMessage("Contenu requis")

];

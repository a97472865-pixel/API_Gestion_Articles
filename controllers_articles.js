import * as service from "../services/services_articles.js";

export const createArticle = async (req, res, next) => {
	try{
		const result = await service.create(req.body);
		res.json({ message: "Article crée", id: result.insertId });
	} catch (err) {
		next(err);
	}
};


export const getArticles = async (req, res, next) => {
	try{
		const data = await service.findAll();
		res.json(data);
	} catch (err) {
		next(err);
	}
};


export const getArticle = async (req, res, next) => {
	try{
		const article = await service.findOne(req.params.id);
		if (!article) return res.status(404).json({ message: "Non trouvé" }); 
		res.json(article);
	} catch (err) {
		next(err);
	}
};


export const updateArticle = async (req, res, next) => {
	try{
		await service.update(req.params.id, req.body);
		res.json({ message: "Mis à jour" });
	} catch (err) {
		next(err);
	}
};


export const deleteArticle = async (req, res, next) => {
	try{
		await service.update(req.params.id);
		res.json({ message: "Supprimé" });
	} catch (err) {
		next(err);
	}
};

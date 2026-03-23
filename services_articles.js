import db from "../config/db.js";

export const create = async (data) => {
	const [result] = await db.execute(
		"INSERT INTO articles (titre, contenu) VALUES (?, ?)",[data.titre, data.contenu]
		);
	return result;
};

export const findALL = async () => {
	const [rows] = await db.execute("SELECT * FROM articles");
	return rows;
};

export const findOne = async (id) => {
	const [rows] = await db.execute("SELECT * FROM articles WHERE id = ?", [id]);
	return rows[0];
};

export const update = async (id, data) => {
	await db.execute("UPDATE articles SET titre=?, contenu=? WHERE id=?",[data.titre, 		data.contenu, id]);
};


export const remove = async (id) => {
	await db.execute("DELETE FROM articles WHERE id=?", [id]);
	return rows;
};

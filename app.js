import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import routes from "./routes/routes_articles.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger/swagger.js";
import { errorHandler } from "./middlewares/middleware_error.js";

dotenv.config();

const app =  express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use(errorHandler);

app.listen(process.env.PORT, () => {
	console.log(`Serveur lancé sur http://localhost:${process.env.PORT}`);
});

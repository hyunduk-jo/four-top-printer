import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./routes";
import globalRouter from "./Router/globalRouter";
import userRouter from "./Router/userRouter";
import navRouter from "./Router/navRouter";
import path from "path";
import { localMiddleware } from "./middleware";

const app = express();

//Middleware
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "Views"));
app.use(localMiddleware);

// Routes
app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.nav, navRouter);

export default app;
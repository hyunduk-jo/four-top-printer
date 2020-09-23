import express from "express";
import { home, postLogin, getLogin, search, welcome, shoppingBasket, postJoin, getJoin } from "../Controller/globalController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin)

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(`${routes.join}${routes.welcome}`, welcome);
globalRouter.get(routes.search, search);
globalRouter.get(routes.shoppingBasket, shoppingBasket);

export default globalRouter;
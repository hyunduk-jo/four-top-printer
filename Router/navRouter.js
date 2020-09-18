import express from "express";
import routes from "../routes";
import { company, gallery, monthlyFree, monthlyPaid, community, rental, promotion, magazine, serviceCenter } from "../Controller/navController";

const navRouter = express.Router();

navRouter.get(routes.company, company);
navRouter.get(routes.gallery, gallery);
navRouter.get(routes.monthlyFree, monthlyFree);
navRouter.get(routes.monthlyPaid, monthlyPaid);
navRouter.get(routes.community, community);
navRouter.get(routes.rental, rental);
navRouter.get(routes.promotion, promotion);
navRouter.get(routes.magazine, magazine);
navRouter.get(routes.serviceCenter, serviceCenter);

export default navRouter;

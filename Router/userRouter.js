import express from "express";
import routes from "../routes";
import { findId, findPw, editProfile, userDetail } from "../Controller/userController"

const userRouter = express.Router();

userRouter.get(routes.findId, findId);
userRouter.get(routes.findPw, findPw);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.userDetail, userDetail);

export default userRouter;
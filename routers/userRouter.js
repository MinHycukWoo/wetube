import express from "express";
import routes from "../routes";
import {
    users,
    userDetail,
    editProfile,
    changePassword
} from "../controllers/userController"
import { onlyPrivate } from "../middlewares";


const userRouter = express.Router();

userRouter.get(routes.editProfile,onlyPrivate, editProfile);
userRouter.get(routes.changePassword,onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;

/*이것을 export해서 보냅니다. */

/*
userRouter.get("/", (req,res) => res.send("user index"))
userRouter.get("/edit", (req,res) => res.send("user edit"))
userRouter.get("/password", (req,res) => res.send("user password"))
*/

/*MVC = Model,Viwe,Control
M = data 
V = 데이터가 어덯게 생겻는지
C = 데이터를 찾는 함수*/
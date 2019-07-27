import passport from "passport";
import User from "./models/user";

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
//쿠키에 어떤값을 보낼것인가를 정한다

passport.deserializeUser(User.deserializeUser());
//쿠키 값으로 어떻게 로그인 시킬것인가.
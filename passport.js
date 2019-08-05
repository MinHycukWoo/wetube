import passport from "passport";
import User from "./models/User";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import { 
    githubLoginCallback,
    facebookLoginCallback
    } from "./controllers/userController";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(new GithubStrategy({
    clientID:process.env.GH_ID,
    clientSecret:process.env.GH_SECRET,
    callbackURL:`http://localhost:4000${routes.githubCallback}`

},githubLoginCallback
)
);

passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.FB_ID,
            clientSecret: process.env.FB_SECRET,
            callbackURL: `http://localhost:4000${routes.facebookCallback
        }`,
        profileFields: ["id","displayName","photo","email"],
        scope:["public_profile","email"]
          },
          facebookLoginCallback
        )
      );
  


passport.serializeUser(User.serializeUser());
//쿠키에 어떤값을 보낼것인가를 정한다
passport.deserializeUser(User.deserializeUser());
//쿠키 값으로 어떻게 로그인 시킬것인가.
import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {

    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = req.user || null;
    console.log(req.user);
    //여기서 console.log(req.user); 의 값이 undefined 라면 로그아웃상태.
    /*{
        isAuthenticated: false,
        id: 1
      };*/
    next();
};

//로그아웃 상태에서만 접근허용 미들웨어
export const onlyPublic = (req, res, next) => {
    if (req.user) {
      res.redirect(routes.home);
    } else {
      next();
    }
  };

//로그인 상태에서만 접근허용 미들웨어
export const onlyPrivate = (req, res ,next) =>{
    if (req.user){
        next();
    }else{
        res.redirect(routes.home);
    }
};
export const uploadVideo = multerVideo.single("videoFile");
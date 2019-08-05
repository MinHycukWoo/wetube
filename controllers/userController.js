import passport from "passport";
import routes from "../routes";
import User from "../models/User";


export const getJoin = (req,res) => {
    res.render("join",{pageTitle:"join"});
};
/*
export const postJoin = (req,res) => {
    console.log(req.body);
    res.render("join",{pageTitle:"join"});
};
*/
export const postJoin = async (req, res, next) => {
    const {
      body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
      res.status(400);
      res.render("join", { pageTitle: "Join" });
    } else {
     try{
        const user = await User({
            name,
            email
        });
        await User.register(user,password);
        next();
     }catch(error){
         console.log(error);
         res.redirect(routes.home);
    }
   
    }
  };



export const getLogin = (req,res) => 
res.render("login",{pageTitle:"login"});

export const postLogin = passport.authenticate("local", {
    failureRedirect: routes.login,
    successRedirect: routes.home
  });

export const githubLogin = passport.authenticate("github");

export const githubLoginCallback = async (accessToken, refreshToken , profile, cb) => {
    //console.log(accessToken, refreshToken, , profile, cb);
    console.log('profile');
    const {_json:{id, avatar_url: avatarUrl,name, email}} = profile;
    try {
        const user = await User.findOne({ email });
        if (user) {
            user.githubId = id;
            user.avatarUrl = avatarUrl;
            user.save();
            return cb(null, user);
        }
        const newUser = await User.create({
            email,
            name,
            githubId: id,
            avatarUrl
        });
        return cb(null, newUser);
        
    }catch(error){
        return cb(error);
    }
};

export const postGithubLogIn = (req, res) => {
    res.redirect(routes.home);
};

export const facebookLogin = passport.authenticate("facebook");

export const facebookLoginCallback = async (
    accessToken, 
    refreshToken,
    profile, 
    cb
    ) => { 
        const {
            _json: { id, name, email }
          } = profile;
        try{
            const user = await User.findOne({email});
            if (user) {
                user.facebookId = id;
                user.avatarUrl =`https://graph.facebook.com/${id}/picture?type=large`;
                user.save();
                return cb(null, user);
            }
            const nerUser = await User.create({
                email,
                name,
                facebookId: id,
                avatarUrl : `https://graph.facebook.com/${id}/picture?type=large`
            });
            return cb(null,newUser);
        }catch(error){
            return cb(error);
        }
    };
     

export const postFacebookLogin = (req, res) => {
    res.redirect(routes.home);
};

export const logout = (req,res) =>{
    req.logout();
    res.redirect(routes.home);
};

export const getMe = (req, res) => {
    res.render("userdetail",{pageTitle:"User Detail", user: req.user});
};
//user: req.user 이때의 유저 값은 현재 로그인된 유저값,
export const userDetail = async (req,res) => {
    const {params:{id} } = req;
    try{
        const user = await User.findById(id);
        //params값을 토대로 id값을 찾아 변수 user에 저장.
        //후에 id 값을 find 하는데 성공햇다면 render
        res.render("userdetail",{pageTitle:"User Detail",user});
    }catch(error){
        res.redirect(routes.home)
    }
};
export const editProfile = (req,res) => 
res.render("editprofile",{pageTitle:"editprofile"});
export const changePassword = (req,res) => 
res.render("changepassword",{pageTitle:"changepassword"});
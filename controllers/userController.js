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


export const logout = (req,res) =>{
    // To Do L Prosess Logout 
    //res.render("logout",{pageTitle:"logout"});
    res.redirect(routes.home);
}

export const users = (req,res) => res.render("users",{pageTitle:"users"});
export const userDetail = (req,res) => res.render("userdetail",{pageTitle:"userdetail"});
export const editProfile = (req,res) => res.render("editprofile",{pageTitle:"editprofile"});
export const changePassword = (req,res) => res.render("changepassword",{pageTitle:"changepassword"});
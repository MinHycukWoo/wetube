import routes from "../routes";

export const getJoin = (req,res) => {
    res.render("join",{pageTitle:"join"});
};
/*
export const postJoin = (req,res) => {
    console.log(req.body);
    res.render("join",{pageTitle:"join"});
};
*/
export const postJoin = (req,res) =>{
    const {
        body:{name , email , password , password2 }
    } = req;
    if(password !== password2) {
        res.status(400);
        res.render("Join",{pageTitle:"Join"});
    }else{
        //To Do : Register User
        //To Do : Log user in
        res.redirect(routes.home);
    }
};


export const getLogin = (req,res) => 
res.render("login",{pageTitle:"login"});
export const postLogin = (req,res) => {
 res.redirect(routes.home)
}


export const logout = (req,res) =>{
    // To Do L Prosess Logout 
    //res.render("logout",{pageTitle:"logout"});
    res.redirect(routes.home);
}

export const users = (req,res) => res.render("users",{pageTitle:"users"});
export const userDetail = (req,res) => res.render("userdetail",{pageTitle:"userdetail"});
export const editProfile = (req,res) => res.render("editprofile",{pageTitle:"editprofile"});
export const changePassword = (req,res) => res.render("changepassword",{pageTitle:"changepassword"});
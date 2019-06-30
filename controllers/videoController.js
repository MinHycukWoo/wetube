import {videos} from "../db";
export const home = (req, res) => {
  res.render("home", { pageTitle:"home", videos});
};

export const search = (req,res) => {
const{
    query:{term: searchingBy }
}= req;
res.render("search",{pageTitle:"search",searchingBy,videos});
};
export const upload = (req,res) => res.render("upload",{pageTitle:"upload"});
export const videoDetail = (req,res) => res.render("videodetail",{pageTitle:"videodetail"});
export const editVideo = (req,res) => res.render("editvideo",{pageTitle:"editvideo"});
export const deleteVideo = (req,res) => res.render("deletevideo",{pageTitle:"deletevideo"});
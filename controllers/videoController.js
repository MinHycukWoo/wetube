import {videos} from "../db";
import routes from "../routes";
export const home = (req, res) => {
  res.render("home", { pageTitle:"home", videos});
};

export const search = (req,res) => {
const{
    query:{term: searchingBy }
}= req;
res.render("search",{pageTitle:"search",searchingBy,videos});
};

export const getUpload = (req,res) => 
res.render("upload",{pageTitle:"upload"});

export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  //To do : upload and save Video
  res.redirect(routes.videoDetail(324393));
}


export const videoDetail = (req,res) => res.render("videodetail",{pageTitle:"videodetail"});
export const editVideo = (req,res) => res.render("editvideo",{pageTitle:"editvideo"});
export const deleteVideo = (req,res) => res.render("deletevideo",{pageTitle:"deletevideo"});
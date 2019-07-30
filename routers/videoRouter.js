import express from "express";
import routes from "../routes";
import { uploadVideo } from "../middlewares";
import {
    videos,
    getUpload,
    postUpload,
    videoDetail,
    getEditVideo,
    postEditVideo,
    deleteVideo
} from "../controllers/videoController";
import { onlyPrivate } from "../middlewares";


const videoRouter = express.Router();


videoRouter.get(routes.upload,onlyPrivate, getUpload);
videoRouter.post(routes.upload,onlyPrivate, uploadVideo, postUpload);


videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(),onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(),onlyPrivate, postEditVideo);

videoRouter.get(routes.deleteVideo(),onlyPrivate, deleteVideo);

export default videoRouter;
/*const 앞에 export가 있으면 이 함수만 export한다는것. */

/*export default = 파일로 전체를 export한다는것. */
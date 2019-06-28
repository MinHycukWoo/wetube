import express from "express";
import routes from "../routes";
import {
    videos,
    upload,
    videoDetail,
    editVideo,
    deleteVideo
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
/*const 앞에 export가 있으면 이 함수만 export한다는것. */

/*export default = 파일로 전체를 export한다는것. */
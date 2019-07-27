/*어플리케이션 호출 */
/*마치 내가 app을 가지고 있는거 처럼 import를 설정한다.*/
import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Comment";
import "./models/Video";
import "./models/User";


const PORT = process.env.PORT || 4000;

const handleListening = () => 
console.log(`Listening on: http://localhost${PORT}`);

app.listen(PORT,handleListening);

/*router 란 toute들의 복잡함을 쪼개주는데 사용할 수 있다. */
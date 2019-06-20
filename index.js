const express = require('express');
const app = express();

/* git remote add origin https://github.com/MinHycukWoo/wetube
   git add.
   git commit -m "Initial Commit"   
   git push origin master
*/

const PORT = 4000;

function handleListening(){
   console.log(`Listening on:http://localhost:${POST}`)
}

/*GET request 로는 정보를 전달 할수가 없어서 POST request가 필요하다*/

function handleHome(req,res){/*request object , response object */
    /*console.log("hi from home!")*/
    /*console.log(req);*/
    res.send("Hello from home");
}

function handleProfile(req,res){
    res.send("You are on my profile")
}

app.get("/",handleHOme);/*GET만 있으면 무한로딩이 일어난다 */

app.get("/profile",handleProfile)

app.listen(PORT, handleListening); /*http://localhost:4000/*/ 
/*npm install @babel/node*/ 
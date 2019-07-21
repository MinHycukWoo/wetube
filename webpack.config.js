//entry어디서 왓는가.
//output이것을 어디에 넣을것인가.?
const path = require("path");
const ExtractCSS = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const MODE = process.env.webpack;
const ENTRY_FILE = path.resolve(__dirname,"assets","js","main.js");
const OUTPUT_DIR = path.join(__dirname,"static");

const config = {
    entry: ["@babel/polyfill",ENTRY_FILE],
    mode: MODE,
    module:{//모듈을 발견할 떄마다
        rules:[//룰 을 따르게 합니다.
            {
                test:/\.(js)$/,
                use:[
                    {
                        loader:"babel-loader"
                    }
                ]
            },
            {
                test: /\.(scss)$/,
                use: ExtractCSS.extract([
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:"postcss-loader",
                        options:{
                            plugins(){
                                return [autoprefixer({ browsers: "cover 99.5%" })];
                                 }
                             }
                    },
                    {
                        loader:"sass-loader"
                    }
                ])
            }
        ]
    },
    output: {
        path: OUTPUT_DIR,
        
        filename: "[name].js"
      },
      plugins: [new ExtractCSS("styles.css")]
    };
    
    module.exports = config;
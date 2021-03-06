
//这是一个配置文件
const path = require('path');
//引入自动将index.html文件打包到dist文件夹下的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//引入将jQ拷贝到出口文件夹中的插件
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports={
    //类型
    mode : 'production',
    //入口
    entry : './src/index.js',
    //出口
    output : {
        //绝对路径
        path : path.resolve(__dirname,"./dist"),//创建dist文件夹用于存放最后打包上线的文件
        filename : 'bundle.js'
    },
    //加载器
    module :{
        rules :[
            {
                test : /\.css$/,
                use : [
                    //顺序要倒着写
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test : /\.scss/,
                use : [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    //插件
    plugins : [
        //自动将index.html文件打包到出口文件夹中，并且自动引入打包好的js文件
        new HtmlWebpackPlugin({
            title : '三只小熊',
            filename : 'abc.html',
            template : './index.html'
        }),
        new CopyWebpackPlugin([
            {
                from : './lib/jquery.min.js',
                to : 'lib'
            }
        ])
    ],
    //解析
    resolve:{
        alias:{
            vue : 'vue/dist/vue.esm.js'
        }
    },
    //webpack-dev-server的配置
    devServer : {
        contentBase : path.resolve(__dirname,'./dist'),
    }
}

//这是一个配置文件
const path = require('path');
//引入自动将index.html文件打包到dist文件夹下的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    //插件
    plugins : [
        //自动将index.html文件打包到出口文件夹中，并且自动引入打包好的js文件
        new HtmlWebpackPlugin({
            title : '三只小熊',
            filename : 'abc.html',
            template : './index.html'
        })
    ]
}
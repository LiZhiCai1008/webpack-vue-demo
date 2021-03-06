# 前端自己的模块化之路

1. script标签要啥引啥
2. AMD规范（require.js）
3. CMD规范 (sea.js)
4. ESM规范 (es6 中出现)

# webpack（打包） 之路

1. 手动压缩。手动打包
2. grunt
3. gulp
4. webpack (最火，最热，用得最多)

# 结合 webpack 搭建起 vue 的开发环境

1. 创建一个项目并初始化
2. 下载项目需要的资源包
  - 生产环境
    - vue
  - 开发环境
    - webpack 
    - webpack-cli
3. 项目根目录下面创建一个 src 文件夹（source意思 源文件），这个文件夹下面放源文件
4. 项目根目录下面创建一个 webpack.config.js （webpack 配置文件）
5. src 下面创建一个 js 文件作为项目的入口文件
6. 配置webpack的文件
7. 简单使用一下
8. 根目录 下面一个 index.html 文件，作为项目的页面入口

## 项目目录结构

- dist         (最终生成的文件-这个文件夹才是最终需要上传到服务器上代码)
- node_modules (放资源包)
- src          (源文件，里面放置一些项目自己写得模块。被webpack打包的文件，都需要放到这个文件夹下面)
  - index.js   (项目的打包入口)
- index.html   (项目页面入口)
- package-lock.json （包锁文件）
- package.json (项目依赖的资源包与项目的描述信息的文件)
- webpack.config.js (webpack的配置文件)


？思考上面三个文件，这三个文件都不是真真需要上线（将项目放到服务器）的内容。于是我们需要 webapck 打包（抽取项目中真真的用在前端的内容）。


## webpack 的配置

四大核心 ，模式|入口|出口是必须要配置的。

- 模式      指定这次打包是打的开发环境用的包，还是生产环境用的包 4.x+ 支持的
- 入口      指定webpack需要打包的项目的入口文件
- 出口      打包之后生成的文件需要放到哪个位置
- 加载器    默认情况下，webpack只是简单的打包js文件，如果需要打包 css img 之类的文件，则需要添加相对应的加载器去处理这种类型的文件。
- 插件      插件是加载器干不了的事情，就可以去用插件来干。

如何配置，就是在 webpack.config.js 文件中，暴露一个写用这些选项的对象。

## 如何调用 webpack 开始打包

命令行中，使用 webpack 这个命令

- ./node_modules/.bin/webpack
- npx webpack (npm 5.x+ 最增的功能)
- 配置 package.json 的 npm 脚本




## 问题集合？

1. 2行代码打包之后生成了 100行。
  因为 webpack 自身默认让我们的代码能够使用 ems 的功能。

2. 如何将根目录下的 index.html 让其在打包的时候，自动生成到 dist 文件夹下面去。

  使用一款插件：HtmlWebpackPlugin


## 插件的使用
1. 找到需要使用的插件并安装他。注意短横线（开发依赖）
2. 在 webpack.config.js 中引入他
3. 在 plugins 选项中调用他，并按照他的文档去做配置。

  
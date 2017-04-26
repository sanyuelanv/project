# project
make a new project with webpack

## 启动项目
1. 前端项目：npm install 或者 yarn install 打开本地的8080端口
2. 后端部分：进入 back文件夹，执行npm start 打开本地的3000端口


## 17-04-26
1. 打包工具更新为webpack v2
2. react-router采用了v4版本：react-router-dom
3. 因为使用了```BrowserRouter```。所以打包出来的文件应该配置一个只提供API，不负责路由的后端才能浏览
4. 打包分离出来的```app.css```，通过执行```gulp css ```可以合并成```app.min.css```

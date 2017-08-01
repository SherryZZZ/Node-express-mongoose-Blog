# Node-express-mongoose-Blog
使用node+express+mongoDB实现的个人博客系统用户登录注册模板

## 前言 ##
  Node开发个人博客系统初探，目前实现了登录注册功能，后续将继续更新博文展示、内容预览、评论以及后台的管理功能，欢迎关注~

## 功能 ##
- [x] 前台登录注册/切换
- [x] Mongodb数据库的使用
- [x] 用户注册逻辑
- [x] 基于数据库的注册验证和用户信息保存
- [x] 用户登录逻辑
- [x] 使用cookie保存用户登录状态

## 安装步骤 ##

	git clone https://github.com/SherryZZZ/Node-express-mongoose-Blog.git		// 把模板下载到本地
	cd Node-express-mongoose-Blog											// 进入模板目录
	npm install													// 安装项目依赖，等待安装完成之后
  
## 本地开发 ##

	mongoDB官网下载地址:https://www.mongodb.com/ 		// 安装mongoDB数据库
	cd MongoDB\Server\3.4\bin\mongod --dbpath=Node-express-mongoose-Blog/db --port=27017		// 进入Mongodb 启动Mongodb服务端
	npm start													// 开启服务器，浏览器访问 http://localhost:8089  

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8089
npm start

```
## 项目截图
### 登录页 ###

![Image text](https://github.com/SherryZZZ/Node-express-mongoose-Blog/raw/master/screenshots/login.png)

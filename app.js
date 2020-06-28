// 创建案例入口文件，服务器
// 项目初始化
// 1.创建各种文件夹：public:存放静态资源 views:存放模板引擎文件 route:存放路由文件 model:存放与数据库相关的文件
// 2.引入第三方模板
// 3.创建入口文件
const express=require('express');
const path=require('path');
const formidable=require('formidable');
const dataFormat=require('dataformat');
const template=require('art-template');
const morgan=require('morgan');
const bodyparse=require('body-parser');
const session=require('express-session');
const pagination=require('mongoose-sex-page');
const config=require('config');
const {User}=require('./model/user.js');
const {Article}=require('./model/article.js')
// const mongoose=require('mongoose');
require('./model/connect.js');
require('./model/user.js');
const app=express();
app.use(bodyparse.urlencoded({extended:false}));
app.use(session({secret:'session-key'}))


// 告知express模板所在的位置,新建views文件夹
app.set('views',path.join(__dirname,'views'))
//设置模板引擎后缀
app.set('view engine','art')
//设置当使用模板后缀为art时所使用的模板。
app.engine('art',require('express-art-template'))
// 向模板引擎内导入dataFormat变量
// template.dafaults.imports.dataFormat=dataFormat;
// 开放静态资源文件，即用express.static()方法服务器就可以读取public文件夹下的静态资源文件
app.use(express.static(path.join(__dirname,'public')))
// 此处将express.static()方法内的地址作为要访问的外联静态的文件的绝对地址
// 引入路由模块
const home=require('./route/home.js');
const admin=require('./route/admin.js');
// 获取请求地址，并切换至二级路由,中间件是从上到下依次执行的
app.use('/admin',(req,res,next)=>{
// 判断当前Url是否为登录页面
// 判断用户的登录状态
if (req.url!='/login'&& !req.session.usename) {	
		res.redirect('/admin/login')
}else{next();}

// 若是登录状态则放行
// 若不是则跳转页面至登录页面


})
app.use('/home',home);
app.use('/admin',admin);
// process.env获取系统环境变量，NODE_ENV为node.js的运行系统环境变量名它的值可以为development或production
if (process.env.NODE_ENV=='development') {
	console.log('当前为开发环境')
	// 将开发环境中的客户端请求信息发送给服务器端，仅限于开发环境下使用
	app.use(morgan('dev'))
}
else{
	console.log('当前为生产环境')
};
// 通过config模块下的get方法来获取不同的开发环境。
// console.log(config.get('title'));

app.use((err,req,res,next)=>{
    // const result=JSON.parse(err);
    // res.send(result)
    // res.redirect(`${result.path}?message=${result.message}&id=${result.id}`)
})
app.listen(80);
console.log('访问成功');
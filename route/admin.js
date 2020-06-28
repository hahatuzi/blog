const express=require('express');
const path=require('path');
const admin=express.Router();

//渲染模板：即通过请求生成一个被渲染的文件
admin.get('/login',(req,res)=>{res.render("admin/login")});
// 通过post以及第三方模块body-parse获取表单提交的数据，并用req.body做处理
admin.post('/login',require('./admin/successLogin.js'));
// 获取数据的数据并渲染至表格中
admin.get('/user',require('./admin/user.js'));
admin.post('/user-edit',require('./admin/user-edit-fn.js'));
admin.get('/user-edit',require('./admin/user-edit.js'))
admin.get('/',(req,res)=>{res.send('欢迎来到博客用户页面')});
// 添加一个实现登录功能的路由
admin.post('/user-updata',require('./admin/user-updata.js'));
admin.get('/user-delete',require('./admin/user-delete.js'))
// 文章列表路由
admin.get('/article',require('./admin/article.js'))
// admin.post('/article-edit',require('./admin/article-add.js'));
admin.post('/article-add',require('./admin/article-add.js'))
// 文章编辑页面的路由
admin.get('/article-edit',require('./admin/article-edit.js'))
admin.post('/article',require('./admin/article-edit-fn.js'))
admin.get('/article-delete',require('./admin/article-delete.js'))
module.exports=admin;
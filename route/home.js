const express=require('express');
const home=express.Router();
// 前台展示页面
home.get('/',(req,res)=>{
	res.send('欢迎来到博客首页')
});
home.get('/default',require('./home/default.js'))
home.post('/default',require('./admin/successLogin.js'))
home.get('/article',require('./home/article.js'))
module.exports=home;
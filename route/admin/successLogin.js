const {User}=require('../../model/user.js');
const {Article}=require('../../model/article.js');
const path=require('path');

const judge=async(req,res)=>{
	// 使用req.body获取到post请求的数据即表单的数据
	var email=req.body.email;
	var password=req.body.password;
	// if (email.trim().length==0||password.trim().length==0) {
	// 	return res.status(400).render('../views/admin/common/err.art');
	// }
	// 获取数据库中的数据并对比
	let user = await User.findOne({email});
	
	if (user) {
		req.session.usename=user.usename;
		req.app.locals.userInfo=user;
		if (password==user.password) {
		// 设置用户权限下的访问页面:若为管理员权限则可以通过登录页面访问用户页面，
		// 若不是则仅能访问文章页面
			if(user.role=='admin'){
	            res.redirect('/admin/user');
			}else{
				// res.send('no');
	            res.redirect(path.join(__dirname,'home/default'));
			}}
		else{res.status(400).render('../views/admin/common/err.art')}
			// else{res.send('您输入的邮箱或密码有误')}
	}else{res.send('该用户不存在')}
	// res.send(req.body);
	// console.log(req.body);
}
module.exports=judge;
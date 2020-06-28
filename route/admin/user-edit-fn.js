const joi=require('joi');
const {User}=require('../../model/user')

module.exports=async (req,res)=>{
	const schema={
		usename:joi.string().min(2).max(12).required().error(new Error('用户名格式不符合规则')),
		email:joi.string().email().required().error(new Error('邮箱格式不符合规则')),
		password:joi.string().regex(/^[a-zA-Z0-9]{5,20}/).required().error(new Error('密码格式不符合规则')),
	    role:joi.string().valid('normal','admin').required().error(new Error('不存在该类角色')),
	    state:joi.number().valid(0,1).required().error(new Error('状态值非法'))
	}
	try{
        // 实施验证
		await joi.validate(req.body,schema);
	}catch(error){
		// console.log(error.message);
		// alert('错误提示:'+error.message)
		return res.redirect(`/admin/user-edit?msg=${error.message}`);
	}
    let user=await User.findOne({email:req.body.email})
    // var email=req.body.email;
    if (user) {
        return res.redirect(`/admin/user-edit?msg=该邮箱地址已经被占用`);
    }
    await User.create(req.body);
    res.redirect(`/admin/user?msg=新用户建立成功`);
	// res.send(req.body);
	// 验证JS数据格式：第三方模块joi
}
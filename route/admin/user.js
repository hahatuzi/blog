const {User}=require('../../model/user.js')

module.exports=async(req,res)=>{
    let msg=req.query.msg;
    let page=req.query.page||1
    let pagesize=3;
    let tital = await User.countDocuments({});
    let total=Math.ceil(tital/pagesize);
	// res.send("用户的总数为"+total)
	// return;

	let start=(page-1)*pagesize;
	let user=await User.find({}).limit(pagesize).skip(start);
	res.render('admin/user',{msg:msg,user,total:total,page:page})
    // 获取到修改用户信息页面的原有用户数据
    	
}
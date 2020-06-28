const {User}=require('../../model/user.js')

module.exports=async(req,res)=>{
	// 获取到要删除的用户的ID
	// req.query.id
	// res.send(req.query.id)
	// 根据用户ID找到该用户并删除他
	await User.findOneAndDelete({_id:req.query.id});
	res.redirect('/admin/user');
}
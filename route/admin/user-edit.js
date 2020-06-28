const {User}=require('../../model/user.js')

module.exports=async(req,res)=>{
    const {msg,id}=req.query;
	if (id) {
		const use=await User.findOne({_id:id});
		// res.send(use);
		res.render('admin/user-edit',{use,link:'/admin/user-updata?id='+id})
	}
	else{res.render("admin/user-edit",{msg:msg,link:'/admin/user-edit'})}
}
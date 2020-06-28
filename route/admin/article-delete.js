const {Article}=require('../../model/article.js')

module.exports=async(req,res)=>{
	// 获取到要删除的用户的ID
	// req.query.id
	// res.send(req.query.id)
	// 根据用户ID找到该用户并删除他
	await Article.findOneAndDelete({title:req.query.title});
	res.redirect('/admin/article');
}
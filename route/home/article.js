const {Article}=require('../../model/article.js');

module.exports=async (req,res)=>{
	const id =req.query.id;
	const article=await Article.findOne({_id:id});
	res.send(article);
	// res.render('home/article.art')
}
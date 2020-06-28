const {Article}=require('../../model/article.js');
const {User}=require('../../model/user.js');
const pagination=require('mongoose-sex-page')
// 将文章数据库的数据渲染至该页面中
module.exports=async(req,res)=>{
	const page=req.query.page;
	// const article=await Article.find();
	const article=await pagination(Article).find().page(page).size(2).display(3).exec();
	// const article=await Article.find().populate('author');
	// const articles=await Article.find();
	// res.send(article);
	// const id=articles.id;
	// const user=await User.find({_id:id});
	// articles.author=user.usename;
    //  res.send(article)
	res.render("admin/article",{article:article});
}
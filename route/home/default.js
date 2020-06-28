// 导入数据库中的数据
const {Article}=require('../../model/article.js');
const pagination=require('mongoose-sex-page');

module.exports=async(req,res)=>{
	const page=req.query.page;
	// 通过该方法获取到数据总数量
    // let tital = await Article.countDocuments({});
	// const article=await Article.find().populate('author');
	// .display()方法会自动获取到数据总数
	const article=await pagination(Article).find().page(page).size(2).display().exec();
   //res.send(article);
	res.render("home/default",{article:article});
}
const {Article}=require('../../model/article.js')

module.exports=async (req,res)=>{
	// 该功能用于实现将新建的文章信息更新至数据库中并重新渲染至文章页面中去
	// 1.先获取到表单post请求提交的数据
	res.send(req.body);
    // const id=req.body
	// 2.将数据更新至数据中
	// 
	// 2.1若数据库中有数据则返回错误信息
	// 2.2若无该数据则更新
	// Article.create(req.body);
	// 3.再将数据渲染至文章页面中
	// res.render('admin/article');
}
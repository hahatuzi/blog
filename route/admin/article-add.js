const formidable=require('formidable');
const {Article}=require('../../model/article.js')
const path=require('path');
module.exports=async(req,res)=>{
     const form=new formidable.IncomingForm();
     form.uploadDir=path.join(__dirname,'../','../','public','upload');
     // console.log(form.uploadDir);
     // // 保留文件的扩展名
     form.keepExtensions=true;
     form.parse(req,(err,fields,files)=>{
     	// res.send(fields);
     	// res.send(files);
     	// 因为files中存放的cover的值path为客户端的绝对路径，而服务器无法访问该路径，故需要将该路径变成副武器的路径
     	// res.send(files.cover.path.split('public')[1])
     	// const title=fields.title;
     	Article.create({
     		title:fields.title,
     		author:fields.author,
     		publishDate:fields.publishDate,
     		cover:files.cover.path.split('public')[1],
     		content:fields.content
     	});
     	res.redirect('/admin/article');
     	// const article=Article.updata(fields)
      //   res.send(article);
     })
// console.log(123);
}
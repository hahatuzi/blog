// 引入mongoose模块
const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost/blog')
//         .then(()=>{console.log('数据库连接成功')})
//         .catch(()=>{console.log('连接失败')})
// 创建文章集合规则
const articleSchema=new mongoose.Schema({
	title:{
		type:String,
		maxlength:30,
		minlength:4,
		required:[true,'请填写文章标题']
	},
	author:{
		// 此处需要将文章的作者与用户数据库关联
		type:mongoose.Schema.Types.ObjectId,
		ref:"User",
		required:true
	},
	publishDate:{
		type:Date,
		default:Date.now
	},
	cover:{
		type:String,
		default:null
	},
	content:{
		type:String		
	}
});

// 根据规则创建集合
const Article=mongoose.model('Article',articleSchema);
// Article.create({
// 	title:'Node.js第一章',
// 	content:'aiisczk'
// }).then(()=>{
// 	console.log('保存成功')
// }).catch(()=>{console.log('保存失败')})
module.exports={Article};
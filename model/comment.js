const mongoose=require('mongoose');
// mongoose.connect('').then(console.log('')).catch()
// 创建评论集合规则
const commentSchema=new mongoose.Schema({
	// 关联数据库
	aid:{
		type:mongoose.Schema.Types.ObjectId,
        ref:'Article'
	},
    uid:{
    	type:mongoose.Schema.Types.ObjectId,
    	ref:'User'
    },
    time:{
    	type:Date
    },
    content:{
    	type:String
    }
})
// 创建评论集合
const Comment=mongoose.model('Comment',commentSchema);
module.exports={Comment}
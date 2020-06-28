
const mongoose=require('mongoose');
// 连接数据库
// mongoose.connect('mongodb://localhost/blog')
//         .then(()=>{console.log('数据库连接成功')})
//         .catch(()=>{console.log('连接失败')})
const Schema=new mongoose.Schema({
	usename:{
		type:String,
		// 一定要存在该字段；
		required:true,
		minlength:2,
		maxlength:20
	},
	email:{
		type:String,
		unique:true,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	role:{
		// 将role的type划分为两类：admin:管理员 normal:普通用户
		type:String,
		required:true,
	},
	state:{
		type:Number,
		default:0,
		// 0代表启用状态，1代表禁用状态。
	}
});
const User=mongoose.model('User',Schema)
// 创建集合实例对象
User.create({
	usename:'user1',
	email:'user1@qq.com',
	password:123456,
	role:'admin',
	state:0
}).then(()=>{console.log('保存成功')}).catch(()=>{console.log('保存失败')})
module.exports={
	User
}
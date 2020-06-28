const joi=require('joi');
// 定义JS独享的验证规则,在schema中可以验证一些数据，若必须要验证某一数据可以加require()
const schema={
	usename:joi.string().min(2).max(10).error(new Error('存在错误')),
	password:[joi.string(),joi.number()]
};

async function run(){
	try{
	await joi.validate({password:'f'},schema);
}catch(err){console.log(err);return;}
console.log('验证成功');
};
run();
const mongoose=require('mongoose');
const config=require('config');
// 连接数据库,数据库登录后再操作连接
// 将数据库的用户信息单独配置在运行环境文件下，并用config获取它
mongoose.connect(`mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get('db.host')}/${config.get('db.name')}`,{ useNewUrlParser: true })
        .then(()=>{console.log('数据库连接成功')})
        .catch(()=>{console.log('数据库连接失败')})
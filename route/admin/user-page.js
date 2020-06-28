const {User}=require('../../model.user')

module.exports=(req,res)=>{
  let user=await User.find({});
  res.send(user);
}
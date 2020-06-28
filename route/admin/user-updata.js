const {User}=require('../../model/user.js')

module.exports=async(req,res,next)=>{
const password=req.body
const id=req.query.id;
const use=await User.findOne({_id:id});
// const isValid=await bcrypt.compare(req.body.password,user.password)
 if(req.body.password==use.password){
     // res.render('admin/user')
     await User.updateOne({_id:id},req.body)
     res.redirect(`/admin/user`)
 }else{
 	// alert('密码比对失败')
   let obj={path:'/admin/user-edit',message:'密码比对失败，不能进行修改',id:use.id};
   next(JSON.stringify(obj));
 }
}
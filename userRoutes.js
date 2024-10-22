

const router = require("express").Router()
const user = require("../model/userModel")
//  const bcrypt = require('bcrypt.js');res.status(400).json({ message: 'invalid credential

 const bcrypt=require("bcrypt")


//for sign up
router.post("/signup",  async(req,res)=>{
  
     try{

        const{username,email,password} = req.body;

      //  check user length is less than 

       if(username.length<4){
     return res.status(400).json({message:"name length should grator than 3"})


      }
      
      // check username already exist
      
      const existingusername= await user.findOne({username:username})
      if(existingusername){

        return res.status(400).json({message:"username is already there"})


}
        
        //check email is already exist
    
        const existinguseremail= await user.findOne({email:email})
        if(existinguseremail){
  
          return res.status(400).json({message:"useremail is already there"})
  

        // const newModal = new usermodal(data)
        // await newModal.save().then(()=>{

        //    res.status(200).json({message:"user added succesfully"})
      // })
        }
    
        //check password's length
    /*
        if(password.length<=5){

          return res.status(400).json({message:"password length should greator than 5"})
  
        }
          */
         const hashPass = await bcrypt.hash(password,6)
        const newUser = new user({
        username:username,
        email:email,
        password:hashPass

        })
       await newUser.save().then(()=>{

           res.status(200).json({message:"user added succesfully"})
       })
        
     


     }catch (error) {
         console.log(error)
     }
   
  

})
// sign in 


router.post("/sign-in", async(req,res)=>{
    try{
 const{username,password} = req.body
 const existinguser = await user.findOne({username})
 if (!existinguser) {
  res.status(200).json({ message: 'invalid credential' })
};

  await bcrypt.compare(password,existinguser.password,(err,data)=>{
  if(data){
    res.status(200).json({ message: 'sign in succesful' })
}else{
  res.status(400).json({ message: 'invalid credential' })
}
  })

  }
    
    
 
catch (error) {
  console.log(error)

    }


  })

//
//for getting usera
router.get("/getuser", async(req,res)=>{
  console.log("res :",res)
// let books;
  try {
   let books = await user.find();
     res.status(200).json({books})
  } catch (error) {
      console.log(error)
  }
})

module.exports = router






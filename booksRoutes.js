const router = require("express").Router()
const bookmodal = require("../model/bookModel")



// Add Books
router.post("/add",  async(req,res)=>{

    try{

        const data = req.body;
        const newBook = new bookmodal(data)
        await newBook.save().then(()=>{

            res.status(200).json({message:"Book added succesfully"})
        })
    } catch (error) {
        console.log(error)
    }


})

// get books
router.get("/getbook", async(req,res)=>{
    console.log("res :",res)
  let books;
    try {
      books = await bookmodal.find();
       res.status(200).json({books})
    } catch (error) {
        console.log(error)
    }
})

// get by id
router.get("/getbook/:id", async(req,res)=>{
    let books;
    const id = req.params.id
      try {
    books = await bookmodal.findById(id);
         res.status(200).json({books})
      } catch (error) {
          console.log(error)
      }
  })


// update by id

router.put("/updateBooks/:id", async(req,res)=>{
    
    const id = req.params.id
    const {bookname,description,author,price,image} = req.body;
      
    let books;
try {
    books = await bookmodal.findByIdAndUpdate(id,{
        bookname,
        description,
        author,
        price,
        image,
    })
    await books.save().then(()=>res.send(200).json({message:"Data updated succesfully"}))
} catch (error) {
    console.log(error)
}



})

// delete by id


router.delete("/deleteBook/:id", async(req,res)=>{

const id = req.params.id;
try {
    await bookmodal.findByIdAndDelete(id).then(()=>res.status(201).json({message:"Deleted succesfully"}))
} catch (error) {
    console.log(error);
    
}




})


module.exports = router
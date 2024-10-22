import axios from "axios";
import React, { useState } from "react"

function AddBooks() {
   const[Data,setData] = useState({

    bookname:"",
    author:"",
    image:"",
    description:"",
    price:"",


   })
    const change = (e)=>{
    const {name, value} = e.target;

    setData({...Data , [name]: value})
    }
   
   
   const Submit = async(e)=>{
      e.preventDefault();
    await axios.post("http://localhost:1000/api/v1/add",Data).then((resp)=>{
        console.log(resp)

        setData({
            BookName:"",
            Author:"",
            Image:"",
            Description:"",
            Price:"",
        }

        )
    })
   }


    console.log(Data)
    return (

        <div className="bg">
         
         <div className="container">
            {/* <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label text-black">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div> */}
            <br/>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label text-black">BookName</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter the Book Name" name="bookname" onChange={change} value={Data.bookname}/>
            </div>


           
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label text-black">Author </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter the Author " name="author" onChange={change} value={Data.author}/>
            </div>

      
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label text-black">Price</label>
                <input type="Number" class="form-control" id="exampleFormControlInput1" placeholder="Enter the Price" name="price" onChange={change} value={Data.price}/>
            </div>

     
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label text-black">Image</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter the url of image" name="image" onChange={change} value={Data.image}/>
            </div>
         
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label text-black">Description</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter the Description" name="description" onChange={change} value={Data.description}/>
            </div>






         {/* <button className="btn btn-sucess">submit</button> */}
         <button type="button" class="btn btn-primary" onClick={Submit}>Submit</button>

            </div>

        </div>



    )





}

export default AddBooks
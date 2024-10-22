import { useEffect, useState } from "react"
import axios from "axios"
import React from "react"
function Books(){
   const[Data, setData] = useState()

/*
   
   async function fetAPIData(){
   const getData = await fetch(`http://localhost:1000/api/v1/getbook`);
  //  console.log("getData :",getData)
const getJSONData = await getData.json()
console.log(getJSONData.books)
setData(getJSONData.books)
   }

   useEffect(()=>{
    fetAPIData()
   },[])
   
   */
   
  useEffect(()=>{

const fetch = async()=>{

  // useEffect(()=>{
   
  // },[])

    await axios.get("http://localhost:1000/api/v1/getbook").then((resp)=>{
        setData(resp.data.books)
     })
}

fetch();


  },[])





return(
    <>
    {/* <div className="d-flex justify-content-between align-items-center" >  */}
    
   <h5 className="text-black">Books Section</h5>
    {/* </div>  */}
   
     <div className="d-flex justify-content-between align-items-center  my-3">
       
       
         {Data && Data.map((item,index)=>( 
        
        <div>
          <div><img style={{height:"210px",width:'430px'
          }}src ={item.image} alt="/"></img></div>

           <h5 style={{fontsize:"15px"}} className="p-2">{item.bookname} </h5>
           <p style={{fontsize:"100px"}} className="px-2 m-0" >Rs.{item.price}</p>

           </div>
         
       ) )}    



     </div>    


    
    </>



)




}

export default Books
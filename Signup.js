import { useState } from "react"

import { Link } from "react-router-dom"
import axios from "axios"
function Signup(){
    /*
    const initialState ={
        name:"",
        email:"",
        password:""
        
    }
        */
   const[Data, setaData] = useState({
    username:"",
    email:"",
    password:""
   })
   const inputHandler=(e)=>{

    const {name, value} = e.target;

    setaData({...Data , [name]: value})
    }
   
    
     const submit=(e)=>{

      e.preventDefault()
     axios.post("http://localhost:1000/api/signup",Data).then((resp)=>{
        console.log(resp)

         
     })
    // console.log(signup)
//    }


    // console.log(Data)

     }
     console.log(Data)
   



    return(

        <div className="Container">
        <div className="innercontainer">
            <h3>Signup</h3>

        {/* <form onSubmit={submitHandler}> */}
        
       <div className="Box">
        <input type ="Text" placeholder="enter the data" name="name" onChange={inputHandler} value={Data.name}/>

        </div>

        <div className="Box">
        <input type ="Text" placeholder="enter the data" name="email" onChange={inputHandler} value={Data.email}/>

        </div>
        <div className="Box">
        <input type ="Text" placeholder="enter the data" name="password" onChange={inputHandler} value={Data.password}/>

        </div>

        <div className="Box">
        <button onClick={submit}>Signup</button>
         <p>Already have account : Kindly <Link to="/Login"><b>Login</b></Link></p> 
        </div>

       {/* </form> */}



        </div>




        </div>






    )


    }

   export default Signup

// export default Signup
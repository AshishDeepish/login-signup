import { useState } from "react"
import { Link } from "react-router-dom"
import  axios  from "axios"
function Login() {
    const initialState ={
        email:"",
        password:""
        
    }
   const[data, setData] = useState(initialState)
   const inputHandler=(e)=>{
    setData({...data, [e.target.name]:e.target.value})
   }
   const submit= async(e)=>{

    e.preventDefault()
     await axios.post("https://localhost:1000/api/getuser",data).then((pes)=>{

  console.log(pes)
    })
    //  console.log(user)
   }


    return (

        
        <div className="Container">
        <div className="innercontainer">
        <h3>Login</h3>
       {/* <form onSubmit={submitHandler}> */}

        <div className="Box">
        <input type ="Text" placeholder="enter the data" name="email" onChange={inputHandler} value={data.email}/>

        </div>
        <div className="Box">
        <input type ="Text" placeholder="enter the data" name="password" onChange={inputHandler} value={data.password}/>

        </div>

        <div className="Box">
        <button onSubmit={submit}>Login</button>
        <p>Don't have account? please <Link to="/Signup">Signup</Link></p>

        </div>

       {/* </form> */}



        </div>




        </div>
      




        






    )





}

export default Login
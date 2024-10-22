
import { Link } from "react-router-dom"
import Home from "../pages/Home"


function Navbar(){

return(
  <>
     <nav className="navbar navbar-expand-lg bg-red">
  <div className="container" >
    <a className="navbar-brand" href="#">Bookstore</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <Link className="nav-item nav-link active" to ="/#">Home
          {/* <a className="nav-link active" aria-current="page" href="#" >Home</a> */}
        </Link>
        <Link className="nav-item nav-link" to ="/Books">Books
          {/* <a className="nav-link" href="#">Books</a> */}
        </Link>
          
        
        <Link className="nav-item nav-link " to="/AddBooks"> AddBooks
          {/* <a className="nav-link" href="#">Add Books</a> */}
        </Link>
        <Link className="nav-item nav-link" to ="/Signup">sign-up
          {/* <a className="nav-link" href="#">Books</a> */}
        </Link>
        <Link className="nav-item nav-link" to ="/Login">Login
          {/* <a className="nav-link" href="#">Books</a> */}
        </Link>
      </ul>
    </div>
  </div>
</nav>
{/* <Home/> */}
  </>



)





}

export default Navbar
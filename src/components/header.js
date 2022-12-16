 import React from "react"

function Header (){
    return(
        <header>
          <div className="container">
        <div className=" d-flex justify-content-start align-items-start">
          <h5 className=" me-auto"> Servis Finding Project</h5>

          <nav className="">
            <a className="p-2 text-dark" href="#">
              Mainpage
            </a>
            <a className="p-2 text-dark" href="#/Login">
              Login
            </a>
            <a className="p-2 text-dark" href="#/categories">
              Categories
            </a>
           
          </nav>
          <a className=" btn btn-outline-primary " href="#">
            Sign up
          </a>
        </div>
        </div>
      </header>

    )
}
 export default Header
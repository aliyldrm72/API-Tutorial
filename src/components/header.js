 import React from "react"

function Header (){
    return(
        <header>
          <div  className="container">
          <div className="justify-content-center align-items-center">
        <div className=" d-flex  pb-3  border-bottom">
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
          
        </div>
        </div>

        
        </div>
      </header>

    )
}
 export default Header
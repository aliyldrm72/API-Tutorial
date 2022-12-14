 import React from "react"

function Header (){
    return(
        <header>
        <div className=" d-flex justify-content-start align-items-start">
          <h5 className=" me-auto"> HELP</h5>

          <nav className="">
            <a className="p-2 text-dark" href="#">
              Features
            </a>
            <a className="p-2 text-dark" href="#">
              Enterprise
            </a>
            <a className="p-2 text-dark" href="#">
              Support
            </a>
            <a className="p-2 text-dark" href="#">
              Pricing
            </a>
          </nav>
          <a className=" btn btn-outline-primary " href="#">
            Sign up
          </a>
        </div>
      </header>

    )
}
 export default Header
import React from "react";
import { connect } from "react-redux";

function Header(props) {
  console.log("<<< HEADER PROPS ", props);
  return (
    <header>
      <div className="container">
        <div className="justify-content-center align-items-center">
          <div className=" d-flex  pb-3  border-bottom">
            <h5 className=" me-auto"> Servis Finding Project</h5>

            <nav className="">
              <a className="p-2 text-dark" href="#">
                Mainpage
              </a>

              <a className="p-2 text-dark" href="#/categories">
                Categories
              </a>

              {props.appDataState.user ? (
                <a className="btn p-2 text-white bg-primary" href="#/Login">
                  {props.appDataState.user.fullname}
                </a>
              ) : (
                <a className="p-2 text-dark" href="#/Login">
                  Login
                </a>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
export default connect((state) => {
  return {
    ...state,
  };
})(Header);

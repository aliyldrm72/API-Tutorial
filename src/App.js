import React from "react";

import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";

import Category from "./pages/category";
import { connect } from "react-redux";

import useApi from "./hooks/useApi";

function App(props) {
  const api = useApi();

  console.log("<<< APP PROPS", props);
  if (props.authState.token && (!props.appDataState.user)) {
    api
      .get('user/appData')
      .then((response) => {
        console.log(">>> APP DATA",response);

        props.dispatch({
          type :'set_app_data',
          payload :{user: response.data.data.user ,

          },
        })

      })
      .catch((err) => {
        console.log("HATAA", err);
      });
  }

  return (
    <div className="container py-3">
      <Header />
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="category/:slug" element={<Category />} />
        </Routes>
      </HashRouter>

      <Footer />
    </div>
  );
}

//export default App;
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(App);

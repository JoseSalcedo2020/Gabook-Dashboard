import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import SideBar from "./SideBar";
import Footer from "./Footer";
import Content from "./Content";
import TopBar from "./TopBar";
import Users from "./UsersHook";
import Products from "./Products";

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          {/*<!-- Main Content -->*/}
          <div id="content">
            {/* <TopBar /> */}
            <Routes>
              <Route path="/" element={<Content />}></Route>
              <Route path="/users" element={<Users />}></Route>
              <Route path="/products" element={<Products />}></Route>
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import image from "../assets/images/gabooklogoBlanco1.png";


function SideBar() {
  return (
    <ul
      className="gabook-navbar navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/*<!-- Sidebar - Brand -->*/}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon">
          <img className="w-100" src={image} alt="Gabook" />
        </div>
      </Link>

      {/*<!-- Divider -->*/}
      <hr className="sidebar-divider my-0" />

      {/*<!-- Nav Item - Dashboard -->*/}
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard - Gabook</span>
        </Link>
      </li>

      {/*<!-- Divider -->*/}
      <hr className="sidebar-divider" />

      {/*<!-- Heading -->*/}
      <div className="sidebar-heading">Acciones</div>

      {/*<!-- Nav Item - Pages -->*/}
      <li className="nav-item">
        <Link className="nav-link collapsed" to="/users">
          <i className="fas fa-users"></i>
          <span>Usuarios</span>
        </Link>
      </li>

      {/*<!-- Nav Item - Charts -->*/}
      <li className="nav-item">
        <Link className="nav-link" to="/products">
          <i className="fas fa-boxes"></i>
          <span>Productos</span>
        </Link>
      </li>


      {/*<!-- Divider -->*/}
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}
export default SideBar;

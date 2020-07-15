import Head from "next/head";
import Link from "next/link";
import NProgress from "nprogress";
import Router from "next/router";
import { isAuth, logout } from "../helpers/auth";
//
Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Layout = ({ children }) => {
  const nav = () => (
    <ul className="nav nav-tabs bg-warning">
      <li className="nav-item">
        <Link href="/">
          <a className="nav-link text-dark" href="">
            Home
          </a>
        </Link>
      </li>

      <li className="nav-item">
        <Link href="/user/link/create">
          <a
            className="nav-link text-dark btn btn-success"
            style={{ borderRadius: "0px" }}
            href=""
          >
            Submit a Link
          </a>
        </Link>
      </li>
      {process.browser && !isAuth() && (
        <React.Fragment>
          <li className="nav-item">
            <Link href="/login">
              <a className="nav-link text-dark" href="">
                Login
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/register">
              <a className="nav-link text-dark" href="">
                Register
              </a>
            </Link>
          </li>
        </React.Fragment>
      )}
      {process.browser && isAuth() && isAuth().role === "admin" && (
        <li className="nav-item ml-auto">
          <Link href="/admin">
            <a href="" className="nav-link text-dark">
              {isAuth().name}
            </a>
          </Link>
        </li>
      )}
      {isAuth() && isAuth().role === "subscriber" && (
        <li className="nav-item ml-auto">
          <Link href="/user">
            <a href="" className="nav-link text-dark">
              {isAuth().name}
            </a>
          </Link>
        </li>
      )}
      {isAuth() && (
        <li className="nav-item">
          <a onClick={logout} className="nav-link text-dark" href="">
            Logout
          </a>
        </li>
      )}
    </ul>
  );

  return (
    <React.Fragment>
      {nav()}
      <div className="container pt-5 pb-5">{children}</div>
    </React.Fragment>
  );
};

export default Layout;

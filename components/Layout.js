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
    <ul className=" ">
      <li className=" ">
        <Link href="/">
          <a className=" " href="">
            Home
          </a>
        </Link>
      </li>

      <li className=" ">
        <Link href="/user/link/create">
          <a href="">Submit a Link</a>
        </Link>
      </li>
      {process.browser && !isAuth() && (
        <React.Fragment>
          <li className="">
            <Link href="/login">
              <a className=" " href="">
                Login
              </a>
            </Link>
          </li>
          <li className=" ">
            <Link href="/register">
              <a className=" " href="">
                Register
              </a>
            </Link>
          </li>
        </React.Fragment>
      )}
      {process.browser && isAuth() && isAuth().role === "admin" && (
        <li className="nav-item ml-auto">
          <Link href="/admin">
            <a href="" className=" ">
              {isAuth().name}
            </a>
          </Link>
        </li>
      )}
      {isAuth() && isAuth().role === "subscriber" && (
        <li className="">
          <Link href="/user">
            <a href="" className="">
              {isAuth().name}
            </a>
          </Link>
        </li>
      )}
      {isAuth() && (
        <li className=" ">
          <a onClick={logout} className=" " href="">
            Logout
          </a>
        </li>
      )}
    </ul>
  );

  return (
    <React.Fragment>
      {nav()}
      <div className=" ">{children}</div>
    </React.Fragment>
  );
};

export default Layout;

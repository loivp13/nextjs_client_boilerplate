import Layout from "../components/Layout";
import axios from "axios";
import { API } from "../config";
import Link from "next/link";
import { useEffect, useState } from "react";
import moment from "moment";

const Home = () => {
  return (
    <Layout>
      <div className="Home">
        <div className="Home_heading">
          <h1 className=" ">Home Page</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

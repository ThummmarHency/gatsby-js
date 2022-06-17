import * as React from "react";
import Layout from "../components/layout";
import style from "../style/indexpage.module.css";

const IndexPage = () => {
  console.log("styles", style);
  return (
    <>
      <title>Home Page</title>
      <Layout>
        <p className={style?.header}>Home page</p>
        <button className={style?.btn}>click here</button>
      </Layout>
    </>
  );
};

export default IndexPage;

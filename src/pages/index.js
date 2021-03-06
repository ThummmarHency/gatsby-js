import { graphql, Link } from "gatsby";
import * as React from "react";
import * as style from "../style/indexpage.module.css";
import Img from "gatsby-image";
const IndexPage = ({ data }) => {
  console.log("data", data);

  return (
    <>
      <title>Home Page</title>
      <h1 className={style?.header}>Home page</h1>

      <div>
        <Img fluid={data?.file?.childImageSharp?.fluid} />
      </div>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "images.png" }) {
      id
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

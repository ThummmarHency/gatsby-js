import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)/" }
          name: { nin: ["icon"] }
        }
      ) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);

  return (
    <div>
      <Layout>
        {data.allFile.edges.map((img, key) => (
          <img key={key} src={img?.node?.publicURL} alt={img?.node?.name} />
        ))}
      </Layout>
    </div>
  );
};

export default Image;

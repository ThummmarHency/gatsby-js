import { graphql, Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import * as style from "../../style/project.module.css";
import Layout from "../../components/layout";
const projects = ({ data }) => {
  const project = data?.project?.nodes;
  console.log("project", project);
  return (
    <Layout>
      <div className={style?.project_img}>
        {project.map((data, key) => (
          <Link to={"/projects/" + data?.frontmatter?.slug} key={data?.id}>
            <Img fluid={data?.frontmatter?.thumb?.childImageSharp?.fluid} />
            <h3>{data?.frontmatter?.title} </h3>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default projects;

export const query = graphql`
  query projects {
    project: allMarkdownRemark {
      nodes {
        frontmatter {
          stack
          slug
          title
          thumb {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

import React from "react";
import Img from "gatsby-image";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import * as style from "../../style/project.module.css";
const projectDeatil = ({ data }) => {
  const { html } = data?.markdownRemark;
  const { title, stack, thumb } = data?.markdownRemark?.frontmatter;
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <h3>{stack}</h3>
        <div className={style?.project_img}>
          <Img fluid={thumb?.childImageSharp?.fluid} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

export default projectDeatil;

export const query = graphql`
  query projectPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        stack
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

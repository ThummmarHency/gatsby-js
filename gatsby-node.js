const path = require("path");

exports.createPages = async ({ graphql, actions, page }) => {
  const { data } = await graphql(`
    query pages {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: "/projects/" + node.frontmatter.slug,
      component: path.resolve("./src/pages/templates/index.js"),
      context: { slug: node.frontmatter.slug },
    });
  });
};
exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/movies|demo/)) {
    page.context.layout = "special";
    createPage(page);
  }
  if (page.path.match(/noLayout/)) {
    page.context.layout = "nolayout";
    createPage(page);
  }
};

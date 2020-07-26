/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// TODO: Auto generate blog and project lists
// const path = require("path");

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const blogPage = path.resolve("src/templates/blog-list.jsx");
//   const projectPage = path.resolve("src/templates/project-list.jsx");

//   const markdownQueryResult = await graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               title
//               tags
//               date
//             }
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `);

//   console.log("QueryResult: ", markdownQueryResult);
// };

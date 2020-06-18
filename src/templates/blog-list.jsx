import React from "react";
import styled from "styled-components";

import SEO from "../components/seo";
import Layout from "../components/layout";
import ProjectCard from "../components/ProjectCard";

export default () => {
  return (
    <Layout>
      <SEO title={`_ Page`} />
      <Header>
        <h1>Blog Posts</h1>
        <p>My thoughts</p>
      </Header>

      <List>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </List>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        image
        date
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;

const Header = styled.header`
  & > h1 {
    margin-bottom: 0;
    font-weight: 900;
    font-size: min(max(1rem, 19vw), 6rem);
    letter-spacing: 0.15rem;

    color: var(--color-secondary);
    opacity: 40%;
  }

  & > p {
    font-size: min(max(1rem, 5vw), 2rem);

    color: var(--color-secondary);
  }
`;

const List = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  /* Snap (to 1 column) together with mobile navbar */
  @media (max-width: 575.98px) {
    grid-template-columns: 1fr;
  }
`;

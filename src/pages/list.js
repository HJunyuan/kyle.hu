import React from "react";
import styled from "styled-components";

import SEO from "../components/seo";
import Layout from "../components/layout";

export default () => {
  return (
    <Layout>
      <SEO title={`List Page`} />
      <Header>
        <h1>Projects</h1>
        <p>A glimpse of my adventures</p>
      </Header>

      <div>
        <div>card 1</div>
        <div>card 1</div>
      </div>
    </Layout>
  );
};

const Header = styled.div`
  & > h1 {
    font-weight: 900;
    font-size: min(max(16px, 19vw), 6rem);
    letter-spacing: 0.15rem;

    color: var(--color-secondary);
    opacity: 40%;
  }

  & > p {
    /* font-size: 1.5rem; */

    color: var(--color-secondary);
  }
`;

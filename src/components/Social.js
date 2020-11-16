import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Row = styled.p`
  svg {
    margin-right: 1rem;
    font-size: 2rem;
  }

  a {
    color: inherit;
  }
`;

export default () => {
  return (
    <Row>
      <a
        target="_blank"
        rel="noopener noreferrer"
        alt="LinkedIn"
        title="LinkedIn"
        href="https://www.linkedin.com/in/kyle-huang-junyuan/"
      >
        <FaLinkedin />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        alt="GitHub"
        title="GitHub"
        href="https://github.com/HJunyuan"
      >
        <FaGithub />
      </a>
    </Row>
  );
};

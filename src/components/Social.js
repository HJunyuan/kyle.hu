import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

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
        alt="Facebook"
        title="Facebook"
        href="https://www.facebook.com/HJunyuan"
      >
        <FaFacebook />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        alt="Instagram"
        title="Instagram"
        href="https://www.instagram.com/HJunyuan"
      >
        <FaInstagram />
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

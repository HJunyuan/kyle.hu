import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ProjectCard = props => {
  const defaultImg = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "about-kyle.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  /*
  TODO:
  - Automatically generate tags
  - Set limit for number of tags (4?)
  - Set word limit for title (10?)
  */
  let tags = [];
  for (let i = 2010; i <= 2020; i++) {
    tags.push(<span key={i}>{i}</span>);
  }

  return (
    <Card>
      <Img
        fluid={defaultImg.placeholderImage.childImageSharp.fluid}
        draggable={false}
      />
      <CardContent>
        <CardTag>{props.tags || tags}</CardTag>
        <h2>{props.title}</h2>
      </CardContent>
    </Card>
  );
};

ProjectCard.defaultProps = {
  image: "about-kyle.jpg",
  tag: ["2020", "2019"],
  title: "Title goes here",
};

ProjectCard.propTypes = {
  image: PropTypes.string,
  tag: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  link: PropTypes.string,
};

export default ProjectCard;

const Card = styled.div`
  border-radius: 10px;
  box-shadow: 4px 4px 5px var(--color-shadow);
  overflow: hidden;

  background-color: white;

  transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);
  &:hover {
    transform: translateY(-0.4rem);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  > span {
    margin: 0 0.2rem 0.2rem 0;
    padding: 0 0.5rem;
    border-radius: 1rem;
    font-size: 0.8rem;

    color: white;
    background-color: var(--color-primary);
  }
`;

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

  return (
    <Card>
      <Img
        fluid={defaultImg.placeholderImage.childImageSharp.fluid}
        draggable={false}
      />
      <CardContent>
        <p>
          {props.tag.slice(0, 5).map(tag => (
            <CardTag>{tag}</CardTag>
          ))}
        </p>
        <CardTitle>{props.title.split(" ").splice(0, 10).join(" ")}</CardTitle>
      </CardContent>
      <CardLine />
    </Card>
  );
};

ProjectCard.defaultProps = {
  image: "about-kyle.jpg",
  tag: ["2020", "NTU", "Video"],
  title: "This is a Project Card with a very long long long long long title",
};

ProjectCard.propTypes = {
  image: PropTypes.string,
  tag: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  link: PropTypes.string,
};

export default ProjectCard;

const Card = styled.div`
  position: relative;
  border-radius: 5px;
  border: 0.5px solid var(--color-border);
  box-shadow: 1px 2px 2px var(--color-shadow);
  overflow: hidden;

  background-color: white;

  transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-0.1rem);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTag = styled.span`
  display: inline-block;
  margin-right: 0.2rem;
  padding: 0.1rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.6rem;

  color: white;
  background-color: var(--color-primary);
`;

const CardTitle = styled.h2`
  font-weight: 700;
  font-size: 1.1rem;
  margin: 0;
`;

const CardLine = styled.hr`
  width: 25%;
  height: 1.5px;
  border: none;
  background-color: var(--color-border);
`;

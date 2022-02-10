import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Page = () => {
  const {
    file: {
      childImageSharp: { gatsbyImageData }
    }
  } = useStaticQuery(graphql`
    query {
      file(name: { eq: "orange" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  return (
    <div>
      <GatsbyImage className="gatsby-image" image={getImage(gatsbyImageData)} alt="An Orange" />
    </div>
  );
};

export default Page;

import React from "react";
import Layouts from "../components/Layout";
import Img from "gatsby-image";
import * as styles from "../styles/project-details.module.css";
import { graphql } from "gatsby";

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark;
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter;

  return (
    <Layouts>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <Img fluid={featuredImg.childImageSharp.fluid} />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layouts>
  );
}

export const query = graphql`
  query projectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
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

import { graphql, Link } from "gatsby";
import React from "react";
import Layouts from "../../components/Layout";
import * as styles from "../../styles/project.module.css";
import Img from "gatsby-image"

export default function Project({ data }) {
  console.log("******", data);
  const projects = data.projects.nodes;
  console.log(projects);

  const contact= data.contact.siteMetadata.contact;

  // console.log("ans", projects[0].)

  return (
    <Layouts>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
      </div>

      <div className={styles.projects}>
        {projects.map((project,i) => {
          return (
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              <div>
                <Img fluid={project.frontmatter.thumb.childrenImageSharp[0].fluid} />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <p>Like what you saw? Email me at {contact}</p>
    </Layouts>
  );
}

export const query = graphql`
query projectPages {
  projects: allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb {
          childrenImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`;

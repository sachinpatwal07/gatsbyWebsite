import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

export default function Navbar() {
  const data = useStaticQuery(graphql`
  query siteInfo {
    site {
      siteMetadata {
        copyright
        description
        title
      }
    }
  }
  `);
  console.log("data is: " +data);

  return (
    <nav>
      <h1> web warrior </h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/projects">Portfolio projects</Link>
      </div>
    </nav>
  );
}

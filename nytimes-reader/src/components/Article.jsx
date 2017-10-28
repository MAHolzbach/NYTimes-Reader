import React from "react";

const Article = props => (
  <div className="card mb-3">
    <div className="card-body">
      <h4 className="card-title">{props.title}</h4>
      <p>{props.abstract}</p>
      <a href={props.link}>Read the full story.</a>
    </div>
  </div>
);

export default Article;

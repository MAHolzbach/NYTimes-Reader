import React from "react";

const Article = props => (
  <div className="row">
    <div className="col-md-4">{props.title}</div>
    <div className="col-md-7">{props.abstract}</div>
    <div className="col-md-1">
      <input type="checkbox" />
    </div>
  </div>
);

export default Article;

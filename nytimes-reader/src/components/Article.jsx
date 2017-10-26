import React from "react";

const Article = props => (
  <div className="row">
    <div className="col-md-1">{props.number}</div>
    <div className="col-md-3">{props.title}</div>
    <div className="col-md-6">{props.abstract}</div>
    <div className="col-md-1">
      <input type="checkbox" />
    </div>
  </div>
);

export default Article;

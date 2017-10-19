import React from "react";

const Article = props => (
  <div className="row">
    <div className="col-md-3">{props.thumbnail}</div>
    <div className="col-md-7">{props.headline}</div>
    <div className="col-md-2">
      <input type="checkbox" />
    </div>
  </div>
);

export default Article;

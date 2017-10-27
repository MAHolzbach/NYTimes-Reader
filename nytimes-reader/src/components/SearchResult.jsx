import React from "react";

const SearchResult = props => (
  <div className="row">
    <div className="col-md-1" />
    <div className="col-md-3">{props.title}</div>
    <div className="col-md-6">{props.extract}</div>
    <div className="col-md-1">
      <input type="checkbox" />
    </div>
  </div>
);

export default SearchResult;

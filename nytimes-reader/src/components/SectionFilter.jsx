import React, { Component } from "react";

const SectionFilter = props => (
  <div className="container-fluid">
    <div className="btn-group">
      <button className="btn btn-secondary">{props.section}</button>
    </div>
  </div>
);

export default SectionFilter;

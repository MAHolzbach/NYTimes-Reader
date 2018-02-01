import React, { Component } from "react";

const SectionFilter = props => (
  <button className="btn btn-secondary" key={props.section}>
    {props.section}
  </button>
);

export default SectionFilter;

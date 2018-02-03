import React, { Component } from "react";

class SectionFilter extends Component {
  constructor(props) {
    super(props);
  }

  handleFilterButton = term => {
    this.props.onFilter(term);
  };

  render() {
    let filterButtons = null;
    if (
      this.props.searchResult.length === 0 &&
      this.props.sectionArray.length <= 20
    ) {
      filterButtons = (
        <div className="btn-group justify-content-center section-bar">
          {this.props.sectionArray
            .slice(0, this.props.maxSectionArrayLength)
            .map(section => (
              <button
                className="btn btn-secondary"
                key={section}
                value={section}
                onClick={event => this.handleFilterButton(event.target.value)}
              >
                {section}
              </button>
            ))}
        </div>
      );
    } else {
      filterButtons = (
        <div className="btn-group justify-content-center section-bar">
          {this.props.sectionArray
            .slice(0, this.props.maxSectionArrayLength)
            .map(section => (
              <div>
                <button
                  id="btnGroupDrop1"
                  type="button"
                  class="btn btn-secondary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </button>
                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a class="dropdown-item" href="#">
                    Dropdown link
                  </a>
                  <a class="dropdown-item" href="#">
                    Dropdown link
                  </a>
                </div>
              </div>
            ))}
        </div>
      );
    }
    return <div>{filterButtons}</div>;
  }
}

export default SectionFilter;

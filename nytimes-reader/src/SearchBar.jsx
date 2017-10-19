import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }
  onSearchChange = searchTerm => {
    this.setState({
      searchTerm
    });
    //Set a callback using props to call method in index.js
  };
  render() {
    return (
      <div className="row">
        <input
          type="text"
          placeholder="Search..."
          onChange={event => this.onSearchChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;

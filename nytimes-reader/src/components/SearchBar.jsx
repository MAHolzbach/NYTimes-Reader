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
    this.props.onSearchChange(searchTerm);
  };
  onSearch = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    this.props.onSearch(searchTerm);
  };
  onFilter = term => {
    this.props.onFilter(term);
  };
  render() {
    return (
      <div className="row">
        <p>Filter results:</p>
        <form>
          <input
            type="text"
            placeholder="Filter..."
            onChange={event => this.onFilter(event.target.value)}
          />
        </form>
        <p>Search NY Times database:</p>
        <form onSubmit={this.onSearch}>
          <input
            type="text"
            placeholder="Search..."
            onChange={event => this.onSearchChange(event.target.value)}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;

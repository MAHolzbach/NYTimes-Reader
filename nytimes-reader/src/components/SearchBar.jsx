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
      <div className="row justify-content-center">
        <p>Search NY Times database:</p>
        <form onSubmit={this.onSearch}>
          <input
            type="text"
            placeholder="Search..."
            onChange={event => this.onSearchChange(event.target.value)}
          />
          <button
            className="btn btn-sm btn-outline-primary ml-2"
            type="button"
            onClick={this.onSearch}
          >
            Search
          </button>
        </form>

        <p className="ml-4">Filter results:</p>
        <form>
          <input
            type="text"
            placeholder="Filter..."
            onChange={event => this.onFilter(event.target.value)}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;

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
  onSearch = () => {
    this.props.onSearch(this.state.searchTerm);
  };
  onFilter = term => {
    this.props.onFilter(term);
  };
  render() {
    return (
      <div className="row">
        <p>Filter results:</p>
        <input
          type="text"
          placeholder="Filter..."
          onChange={event => this.onFilter(event.target.value)}
        />
        <p>Search NY Times database:</p>
        <form>
          <input
            type="text"
            placeholder="Search..."
            onChange={event => this.onSearchChange(event.target.value)}
            onSubmit={this.onSearch}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;

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
        <form onSubmit={this.onSearch}>
          <div className="input-group">
            <div className="input-group-prepend">
              <label className="input-group-text">
                Search NY Times database:
              </label>
            </div>
            <input
              className="form-control"
              type="text"
              placeholder="Search..."
              onChange={event => this.onSearchChange(event.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-primary" type="button">
                Search
              </button>
            </div>
          </div>
        </form>
        <form>
          <div className="input-group">
            <div className="input-group-prepend">
              <label className="input-group-text">Filter articles:</label>
            </div>
            <input
              className="form-control"
              type="text"
              placeholder="Filter..."
              onChange={event => this.onFilter(event.target.value)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

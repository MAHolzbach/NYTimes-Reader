import React from "react";
import Article from "./components/Article";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import Header from "./components/Header";
import SectionFilter from "./components/SectionFilter";

//TODO: Add section list for search results list of articles.
//TODO: Add some kind of "loading" spinner for better UX.

const topFiltered = term => item =>
  !term ||
  item.abstract.toLowerCase().includes(term.toLowerCase()) ||
  item.section.toLowerCase().includes(term.toLowerCase());

const searchFiltered = term => item =>
  !term || item.snippet.toLowerCase().includes(term.toLowerCase());

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      filter: "",
      articleList: [],
      searchResult: [],
      sectionArray: [],
      maxSectionArrayLength: 15
    };
  }

  onSearchChange = searchTerm => {
    this.setState({ searchTerm: searchTerm });
  };

  onFilter = term => {
    this.setState({ filter: term });
  };

  async componentDidMount() {
    const url =
      "https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/topstories/v2/home.json";
    const myHeaders = new Headers({
      "api-key": "00f6cfa8c6df43179ebcbf4ad38a7cce"
    });
    const myParams = { method: "GET", headers: myHeaders, mode: "cors" };
    const request = new Request(url, myParams);
    await fetch(request)
      .then(response => response.json())
      .then(data => {
        this.setState({ articleList: data.results });
      });
    this.sectionArrayBuilder(this.state.articleList);
  }

  articleSearch = async searchTerm => {
    const url =
      "https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
      searchTerm;
    const myHeaders = new Headers({
      "api-key": "00f6cfa8c6df43179ebcbf4ad38a7cce"
    });
    const myParams = {
      method: "GET",
      headers: myHeaders,
      mode: "cors"
    };
    const request = new Request(url, myParams);
    await fetch(request)
      .then(response => response.json())
      .then(data => {
        this.setState({ searchResult: data.response.docs });
      });
    this.sectionArrayBuilder(this.state.searchResult);
  };

  sectionArrayBuilder = arr => {
    const sectionArray = [];
    arr.forEach(article => {
      if (sectionArray.indexOf(article.section) === -1) {
        sectionArray.push(article.section);
      }
    });
    this.setState({ sectionArray });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Header />
            <SearchBar
              onSearch={this.articleSearch}
              onFilter={this.onFilter}
              onSearchChange={this.onSearchChange}
            />
            <SectionFilter
              searchResult={this.state.searchResult}
              sectionArray={this.state.sectionArray}
              maxSectionArrayLength={this.state.maxSectionArrayLength}
              onFilter={this.onFilter}
            />
            {this.state.searchResult.length === 0 ? (
              <h2>Our current top stories:</h2>
            ) : (
              <h2>Search results:</h2>
            )}
            {this.state.searchResult.length === 0 &&
              this.state.articleList
                .filter(topFiltered(this.state.filter))
                .map(article => (
                  <Article
                    abstract={article.abstract}
                    title={article.title}
                    link={article.url}
                    number={this.state.articleList.indexOf(article)}
                  />
                ))}
            {this.state.searchResult
              .filter(searchFiltered(this.state.filter))
              .map(article => (
                <SearchResult
                  title={article.headline.main}
                  extract={article.snippet}
                  link={article.web_url}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

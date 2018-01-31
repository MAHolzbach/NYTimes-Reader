import React from "react";
import Article from "./components/Article";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import Header from "./components/Header";
import SectionFilter from "./components/SectionFilter";

//TODO: Build function to create array of sections. Add to state. forEach it to render ONE section button for each section, rather than one for each article. Object map? forin loop?

const topFiltered = term => item =>
  !term || item.abstract.toLowerCase().includes(term.toLowerCase());

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
      sectionArray: []
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

  articleSearch = searchTerm => {
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
    fetch(request)
      .then(response => response.json())
      .then(data => {
        this.setState({ searchResult: data.response.docs });
      });
  };

  sectionArrayBuilder = arr => {
    //Iterate over data results object and pull out section attribute
    const sectionArray = [];
    arr.forEach(article => {
      sectionArray.push(article.section);
    });
    //Add that to a part of state
    this.setState({ sectionArray });
  };

  render() {
    return (
      <div>
        <Header />
        {this.state.searchResult.length === 0 &&
          this.state.articleList
            .filter(topFiltered(this.state.filter))
            .map(article => <SectionFilter section={article.section} />)}
        <div className="container">
          <SearchBar
            onSearch={this.articleSearch}
            onFilter={this.onFilter}
            onSearchChange={this.onSearchChange}
          />
          {this.state.searchResult.length === 0 ? (
            <h1>Our top stories:</h1>
          ) : (
            <h1>Search results:</h1>
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
    );
  }
}

export default App;

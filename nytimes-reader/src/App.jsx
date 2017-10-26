import React from "react";
import Article from "./components/Article";
import SearchBar from "./components/SearchBar";

const isFiltered = term => item =>
  !term || item.abstract.toLowerCase().includes(term.toLowerCase());

const articleSearch = searchTerm => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  const request = new Request(proxyurl + url, {
    headers: new Headers({
      "api-key": "00f6cfa8c6df43179ebcbf4ad38a7cce",
      "?": searchTerm
    })
  });
  fetch(request)
    .then(response => response.json())
    .then(data => {
      this.setState({ articleList: data.results });
    });
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      filter: "",
      articleList: [
        {
          thumbnail: "imagefile1",
          headline: "If it bleeds it leads!"
        },
        {
          thumbnail: "imagefile2",
          headline: "Rabble rabble rabble!!"
        },
        {
          thumbnail: "imagefile3",
          headline: "Celebrity nonsense..."
        }
      ]
    };
  }

  onSearchChange = searchTerm => {
    this.setState({ searchTerm: searchTerm });
  };

  onFilter = term => {
    this.setState({ filter: term });
  };

  onSearch = searchTerm => {
    articleSearch(searchTerm);
  };

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.nytimes.com/svc/topstories/v2/home.json";
    const request = new Request(proxyurl + url, {
      headers: new Headers({
        "api-key": "00f6cfa8c6df43179ebcbf4ad38a7cce"
      })
    });
    fetch(request)
      .then(response => response.json())
      .then(data => {
        this.setState({ articleList: data.results });
      });
  }

  render() {
    return (
      <div className="container">
        <SearchBar
          onSearch={this.onSearch}
          onFilter={this.onFilter}
          onSearchChange={this.onSearchChange}
        />
        {this.state.articleList
          .filter(isFiltered(this.state.filter))
          .map(article => (
            <Article
              abstract={article.abstract}
              title={article.title}
              number={this.state.articleList.indexOf(article)}
            />
          ))}
      </div>
    );
  }
}

export default App;

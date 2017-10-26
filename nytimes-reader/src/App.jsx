import React from "react";
import Article from "./components/Article";
import SearchBar from "./components/SearchBar";

const isSearched = searchTerm => item =>
  !searchTerm || item.abstract.toLowerCase().includes(searchTerm.toLowerCase());

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
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

  onSearch = searchTerm => {
    this.setState({ searchTerm: searchTerm });
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
        <SearchBar onSearch={this.onSearch} />
        {this.state.articleList
          .filter(isSearched(this.state.searchTerm))
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

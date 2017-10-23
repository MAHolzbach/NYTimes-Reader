import React from "react";
import Article from "./components/Article";
import SearchBar from "./components/SearchBar";

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

  onSearch = term => {
    this.setState({ searchTerm: term });
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
      .then(data => console.log(data.results[4]));
  }

  render() {
    return (
      <div className="container">
        <SearchBar onSearch={this.onSearch} />
        {this.state.articleList.map(article => (
          <Article thumbnail={article.thumbnail} headline={article.headline} />
        ))}
      </div>
    );
  }
}

export default App;

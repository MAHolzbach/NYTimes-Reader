import React from "react";
import { render } from "react-dom";
import Article from "./Article";
import SearchBar from "./SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    return (
      <div className="container">
        <SearchBar />
        {this.state.articleList.map(article => (
          <Article thumbnail={article.thumbnail} headline={article.headline} />
        ))}
      </div>
    );
  }
}

export default App;

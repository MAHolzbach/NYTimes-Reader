import React from "react";

const Header = () => {
  return (
    <nav className="nav justify-content-center">
      <a className="nav-link" href="http://nytimes-reader.surge.sh/">
        <h1>The NYTimes Reader</h1>
      </a>
      {/* <a className="nav-link" href="https://www.nytimes.com">
        The New York Times Website
      </a> */}
    </nav>
  );
};

export default Header;

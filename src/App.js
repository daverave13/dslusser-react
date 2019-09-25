import React from "react";
import linkData from "./linkData";
import manhattanLinkData from "./manhattanLinkData";
import Link from "./Components/Link";
import Filter from "./Components/Filter";

let links = linkData
  .sort((a, b) => (a.title > b.title ? 1 : -1))
  .map(({ id, title, src, alt, url }) => (
    <Link key={id} src={src} title={title} alt={alt} url={url} />
  ));

const preFilterLinks = links;

let manhattanLinks = manhattanLinkData
  .sort((a, b) => (a.title > b.title ? 1 : -1))
  .map(({ id, title, src, alt, url }) => (
    <Link key={id} src={src} title={title} alt={alt} url={url} />
  ));

const preFilterManhattanLinks = manhattanLinks;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filterValue: "",
      updated: false
    };
  }

  componentDidMount() {
    document.getElementById("input").focus();
  }

  componentDidUpdate() {
    document.getElementById("input").focus();
  }

  filterValueCallback = event => {
    this.setState({
      filterValue: event.target.value
    });
  };

  render() {
    let filterValue = this.state.filterValue.toUpperCase();
    links = preFilterLinks.filter(event =>
      event.props.title.toUpperCase().includes(filterValue)
    );
    manhattanLinks = preFilterManhattanLinks.filter(event =>
      event.props.title.toUpperCase().includes(filterValue)
    );

    return (
      <div className="App">
        <Filter parentCallback={this.filterValueCallback} />
        <div className="links">{links}</div>
        <div className="manhattanLinks">{manhattanLinks}</div>
      </div>
    );
  }
}

export default App;

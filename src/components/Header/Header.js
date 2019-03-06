import React, { Component } from "react";
import Context from "../Context/Context";
import "./Header.scss";

export default class Header extends Component {
  state = {
    query: "",
    filterByTag: null
  };

  changeQuery = () => {
    return event => {
      this.setState({
        query: event.target.value
      });
    };
  };

  sendQuery = () => {
    return key => {
      if (key.key === "Enter") {
        this.props.setFilterQuery(this.state.query);
      }
    };
  };

  changeTagFilter = () => {
    return event => {
      console.log(event.target);
      this.setState(
        {
          filterByTag: event.target.value
        },
        () => this.props.setFilterTag(this.state.filterByTag)
      );
    };
  };

  render() {
    return (
      <Context.Consumer>
        {({ tags }) => (
          <div className="Header">
            <input
              className="Header__field"
              value={this.state.query}
              onChange={this.changeQuery()}
              onKeyPress={this.sendQuery()}
              type="text"
            />
            <select onChange={this.changeTagFilter()}>
              <option value={"null"}>Reset</option>
              {tags.map(tag => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        )}
      </Context.Consumer>
    );
  }
}

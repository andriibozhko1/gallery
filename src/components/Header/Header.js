import React, { Component } from "react";
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

  changeTagFilter = () => {
    return event => {
      console.log(event.target)
      this.setState({
        filterByTag: event.target.value
      }, () => this.props.setFilterTag(this.state.filterByTag));
    };
  };

  render() {
    return (
      <div className="Header">
        <input
          value={this.state.query}
          onChange={this.changeQuery()}
          type="text"
        />
        <select onChange={this.changeTagFilter()}>
          <option value={'null'}>
            Reset
          </option>
          {this.props.tags.map(tag => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

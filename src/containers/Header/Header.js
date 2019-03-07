import React, { Component } from "react";
import PropTypes from 'prop-types'
import { ContextConsumer } from "../../Context/Context"
import "./Header.scss";

export default class Header extends Component {
  static propTypes = {
    setFilterQuery: PropTypes.func,
    setFilterTag: PropTypes.func
  };
  
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
      <ContextConsumer>
        {({ tags }) => (
          <div className="Header">
            <label className="Header__title">
              Search:
              <input
                className="Header__field"
                value={this.state.query}
                onChange={this.changeQuery()}
                onKeyPress={this.sendQuery()}
                placeholder="Search something..."
                type="text"
              />
            </label>
            <span className="Header__title">Sort By:</span>
            <select className="Header__drop-down" onChange={this.changeTagFilter()}>
              <option value={"null"}>Reset</option>
              {tags.map(tag => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        )}
      </ContextConsumer>
    );
  }
}

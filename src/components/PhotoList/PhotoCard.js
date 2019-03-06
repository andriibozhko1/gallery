import React, { Component } from "react";
import Context from "../Context/Context";
import TagsDropDown from "../TagsDropDown/TagsDropDown";
import randomColor from "randomcolor";
import "./PhotoCard.scss";

export default class PhotoCard extends Component {
  state = {
    dropDownIsOpen: false
  };

  togglerDropDown = () => {
    this.setState(({ dropDownIsOpen }) => {
      return {
        dropDownIsOpen: !this.state.dropDownIsOpen
      };
    });
  };

  getTag = tag => {
    return () => {
      const id = this.props.photoData.id;

      this.updateData({
        id,
        tag,
        color: randomColor()
      });
      this.togglerDropDown();
    };
  };

  render() {
    const { url, title } = this.props.photoData;

    return (
      <Context.Consumer>
        {props => {
          this.updateData = props.updateData;

          return (
            <div>
              <div className="PhotoCard">
                <div className="PhotoCard__img-block">
                  <img className="PhotoCard__img" src={url} alt={title} />
                </div>
                <div className="PhotoCard__title">{title}</div>
                <div className="PhotoCard__tags-btn" onClick={this.togglerDropDown}  >
                  Add TAG
                </div>
                <div className="PhotoCard__tags-container">
                  <ul className="PhotoCard__tags-container-list">
                    {this.props.photoData.tags.map(tag => (
                      <li key={tag.color} className="PhotoCard__tags-container-item" style={{ backgroundColor: tag.color }} >
                        <div className="PhotoCard__tags-container-item-dot" />
                        {tag.tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <TagsDropDown dropDownIsOpen={this.state.dropDownIsOpen} getTag={this.getTag}/>
              </div>
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}

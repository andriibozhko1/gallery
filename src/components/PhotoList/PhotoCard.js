import React, { Component } from "react";
import TagsDropDown from "../TagsDropDown/TagsDropDown";
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

  getTag = (tag) => {

    return () => {
      const id = this.props.photoData.id;
      
      this.props.updateData({id, tag,})
      this.togglerDropDown();
    }
  }

  render() {
    const { url, title } = this.props.photoData;
  
    return (
      <div>
        <div className="PhotoCard">
          <div className="PhotoCard__img-block">
            <img className="PhotoCard__img" src={url} alt={title} />
          </div>
          <div className="PhotoCard__title">{title}</div>
          <div className="PhotoCard__tags-btn" onClick={this.togglerDropDown}>Add TAG</div>
          <div className="PhotoCard__tags-container">
            <ul>
              {this.props.photoData.tags.map(tag => (
                <li>{ tag }</li>
              ))}  
            </ul>            
          </div>
          <TagsDropDown 
            tags={this.props.tags} 
            dropDownIsOpen={this.state.dropDownIsOpen} 
            getTag={this.getTag}
          />
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import TagsDropDown from "../TagsDropDown/TagsDropDown";
import randomColor from 'randomcolor';
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
      
      this.props.updateData({        
        id,
        tag,
        color: randomColor(),
      })
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
            <ul className="PhotoCard__tags-container-list">
              {this.props.photoData.tags.map(tag => (
                <li key={tag.color}  className="PhotoCard__tags-container-item" style={{backgroundColor: tag.color}}>
                    <div className="PhotoCard__tags-container-item-dot"></div>
                    { tag.tag }
                </li>
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

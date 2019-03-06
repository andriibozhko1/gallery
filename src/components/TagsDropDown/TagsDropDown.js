import React, { Component } from 'react'
import randomColor from 'randomcolor';
import './TagsDropDown.scss'

export default class TagsDropDown extends Component {
 
  render() {        
    
    return (
      <div hidden={!this.props.dropDownIsOpen} className="TagsDropDown">
        <ul className="TagsDropDown__list">
          {this.props.tags.map(tag => (
            <div key={tag} onClick={this.props.getTag(tag)} className="TagsDropDown__item">{ tag }</div>
          ))}
        </ul>
      </div>
    )
  }
}

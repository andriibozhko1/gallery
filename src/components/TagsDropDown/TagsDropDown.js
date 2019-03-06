import React, { Component } from 'react'
import randomColor from 'randomcolor';
import './TagsDropDown.scss'

export default class TagsDropDown extends Component {
 
  render() {        
    console.log(randomColor())
    return (
      <div hidden={!this.props.dropDownIsOpen} className="TagsDropDown">
        <ul className="TagsDropDown__list">
          {this.props.tags.map(tag => (
            <div className="TagsDropDown__item">{ tag }</div>
          ))}
        </ul>
      </div>
    )
  }
}

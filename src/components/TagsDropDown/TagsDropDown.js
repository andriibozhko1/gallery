import React, { Component } from 'react'
import './TagsDropDown.scss'

export default class TagsDropDown extends Component {
 
  render() {        
    return (
      <div hidden={!this.props.dropDownIsOpen} className="TagsDropDown">
        
      </div>
    )
  }
}
